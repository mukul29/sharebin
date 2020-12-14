import { Request, Response, NextFunction } from "express";

import HttpError from '../models/http-error';

// Return index.html page
export const getIndex = (req: Request, res: Response, next: NextFunction) => {
    const message: string = "Index";
    res.status(200).json({ message });
}

// Get paste by id
export const getPasteById = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    res.status(200).json({ id: id });
}

export const createPaste = (req: Request, res: Response, next: NextFunction) => {
    if(req.file && !req.file.size) {
        return next(new HttpError("FILE_UPLOAD_ERROR", 422));
    }
    // Add entry to database

    // Add paste to /uploads

    // return link + id
    res.status(201).json({ message: "created post", file: req.file })
}
