import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  console.log("api is running");
  res.status(200).json({ message: "hello world" });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
