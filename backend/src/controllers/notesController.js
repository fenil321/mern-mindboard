import Note from '../models/Note.js'

export const getAllNotes = async (_,res) => {
    try {
        const notes = await Note.find().sort({createdAt:-1}); // -1 will sort in desc (newest first)
        res.status(200).json(notes);
    } catch (error) {
        console.log("error in getallnotes controller",error);
        res.status(500).json({ message: "Internal server error"});
    }
};

export const getNoteById = async (req,res) => {
    try {
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message: "Internal server error"});
        res.json(note);
    } catch (error) {
        console.log("error in getNoteById controller",error);
        res.status(500).json({ message: "Internal server error"});
    }
};

export const createNote = async (req,res) => { //this is called routes
    try {
        const {title, content} = req.body
        const note = new Note({title, content})
        console.log(title,content);

        const savedNote = await note.save();
        res.status(201).json(savedNote);
        
    } catch (error) {
        console.log("error in createnotes controller",error);
        res.status(500).json({ message: "Internal server error"});
    }
};

export const updateNote = async (req,res) => {
    try {
        const { title, content } = req.body; //using middleware we can access the re.body, without we cant access it.
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content },{new:true});
        if(!updatedNote) return res.status(404).json({message: "Note not found"});
        res.status(200).json(updatedNote);
    } catch (error) {
        console.log("error in updatenotes controller",error);
        res.status(500).json({ message: "Internal server error"});
    }
};     

export const deleteNote = async (req,res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) return res.status(404).json({message: "Note not found"});
        res.status(200).json({message:"Note deleted successfully!"});
    } catch (error) {
        console.log("error in deletenotes controller",error);
        res.status(500).json({ message: "Internal server error"});
    }
};
