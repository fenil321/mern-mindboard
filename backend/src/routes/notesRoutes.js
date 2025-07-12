import express from 'express';
import {getAllNotes, createNote, updateNote, deleteNote, getNoteById} from '../controllers/notesController.js';

const router = express.Router();

// what is an Endpoint??
// An endpoint is a combination of a URL + HTTP methos that lets the client interact with a specific resource.
router.get("/" , getAllNotes);
router.get("/:id" , getNoteById);
router.post("/", createNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);

export default router;