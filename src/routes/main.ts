import express from "express";

export const mainRouter = express.Router();

mainRouter.get("/", (req, res) => {
    res.json({ viana: true });
});

mainRouter.post("/name", (req, res) => {
    const data = req.body;

    console.log(data.name);

    res.json({ newUser: data });
});