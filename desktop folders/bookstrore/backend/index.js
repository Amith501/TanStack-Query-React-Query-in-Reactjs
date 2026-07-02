import express from "express";
import dotenv from "dotenv";
import bookRoute from "./routes/bookRoute.js";
import connectdb from "./config/db.js";
dotenv.config();

const server = express();
const URL =
  process.env.URL 

const PORT = process.env.PORT || 3000;

server.use(express.json());
server.use("/books", bookRoute);

// Root route
server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Bookstore API!" });
});

// Connect to the database and start the server
connectdb()
  .then(() => {
    console.log("Connected to the database successfully.");

    server.listen(PORT, () => {
      console.log(`Server started running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error.message || error);
    process.exit(1); // Exit the process if the database connection fails
  });
