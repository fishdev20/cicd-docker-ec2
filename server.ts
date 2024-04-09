import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get("/", async (req: Request, res: Response) => {
  res.send("<h1>Welcome to CI/CD Docker EC2</h1>");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
