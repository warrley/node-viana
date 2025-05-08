import express from "express";
import dotenv from "dotenv";
import { mainRouter } from "./routes/main";

const server = express();

dotenv.config();

server.use(express.json());

server.use("/", mainRouter);

server.listen(process.env.PORT, () => {
    console.log(`server running at ${process.env.PORT}`);
});