import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use("/posts", postRoutes);

// general setup

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vq4u4.mongodb.net/mentoring_db?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on PORT: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect to server`));

mongoose.set("useFindAndModify", false);
