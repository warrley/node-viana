import express from "express";
import dotenv from "dotenv";

const server = express();

dotenv.config();

server.get("/", (req, res) => {
    res.json({ok: true});
});

server.listen(process.env.PORT, () => {
    console.log(`server running at ${process.env.PORT}`);
});