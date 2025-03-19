import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { checkConnection } from "./lib/connectDB";
import schoolRoutes from "./routes/school.route";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api", schoolRoutes);

app.get("/", (req, res) => {
  res.send("Hello, TypeScript + Express!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  checkConnection();
});
