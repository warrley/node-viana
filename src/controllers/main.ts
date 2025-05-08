import { Request, RequestHandler, Response } from "express";

export const addUser = (req: Request, res: Response) => {
    const data = req.body;

    res.json({ newUser: data });
};

export const deleteUser: RequestHandler = (req, res) => {

};