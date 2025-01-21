import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) =>{
    res.json({
        message: "Get all users"
    });
};

export const createUser = (req: Request, res: Response) => {
    const { name, email } = req.body;
    res.json({
        message: `User ${name} with email ${email} created !`
    });
};