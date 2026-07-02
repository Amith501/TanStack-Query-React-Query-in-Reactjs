

import express from "express";
import { book } from "../model/book.model.js";

// ✅ Create Book
export const createBook = async (req, res) => {
  try {
    const { title, author, publishyear, category } = req.body;

    // ❌ Your condition was wrong — it would always pass.
    if (!title || !author || !publishyear || !category) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newBook = {
      title,
      author,
      publishyear,
      category,
    };

    const data = await book.create(newBook);
    return res.status(201).json({ success: true, data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ Get All Books
export const getAllBooks = async (req, res) => {
  try {
    const books = await book.find({});
    return res.status(200).json({ success: true, books });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, message: "Error fetching records" });
  }
};

// ✅ Update Book
export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishyear, category } = req.body;

    const updatedBook = await book.findByIdAndUpdate(
      id,
      { title, author, publishyear, category },
      { new: true } // returns updated document
    );

    if (!updatedBook) {
      return res.status(404).json({ success: false, message: "Book not found" });
    }

    return res.status(200).json({ success: true, updatedBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error updating book" });
  }
};

// ✅ Delete Book
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ success: false, message: "Book not found" });
    }

    return res.status(200).json({ success: true, message: "Book deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error deleting book" });
  }
};
