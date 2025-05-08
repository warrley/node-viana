import { Request, RequestHandler, Response } from "express";
import fs from "fs/promises";
import { addName, readNames } from "../services/db";

export const addUser = async (req: Request, res: Response) => {
    const data = req.body;

    const newName = await addName(data.name);

    res.json({ newName: newName });
};

export const getUsers: RequestHandler = async  (req, res) => {
    const names = await readNames();

    res.json({ names });
};