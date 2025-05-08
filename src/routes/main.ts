import express, { Request, Response } from "express";
import * as mainController from "../controllers/main";

export const mainRouter = express.Router();

mainRouter.get("/", (req, res) => {
    res.json({ viana: true });
});

mainRouter.post("/name", mainController.addUser);