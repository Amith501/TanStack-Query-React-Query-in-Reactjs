import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    author: {
      required: true,
      type: String,
    },
    publishyear: {
      required: true,
      type: Number,
    },
    category: {
      required: true,
      type: String,
    },
  },
  { timestamp: true }
);

export const book = mongoose.model("books", bookSchema);
