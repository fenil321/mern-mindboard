import express from "express";
import notesRouter from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from 'dotenv';
import rateLimiter from "./middleware/rateLimiter.js";
import cors from 'cors';
import path from "path";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001
const __dirname = path.resolve();

//middleware
if(process.env.NODE_ENV !== "production"){
  
    app.use(cors({
      origin:"http://localhost:5173"
    }));
}
app.use(express.json()); //this middleware will parse JSON bodies: req.body
app.use(rateLimiter);

// our simple custom middleware
/* app.use((req,res,next)=>{
  console.log(`req method is ${req.method} & url is ${req.url}`);
  next();
}); */

app.use("/api/notes", notesRouter);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
  });
}

connectDB().then(() => {
    app.listen(PORT , () => {
      console.log(`Server started on PORT: ${PORT}`);
    });
});



// middleware is a function that runs in the middle between the request and response.
