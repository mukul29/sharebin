if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import cors from "cors";

import HttpError from "./models/http-error";

import pastesRoutes from "./routes/pastes-routes";
import usersRoutes from "./routes/users-routes";
import multer, { Multer } from "multer";

// initialize express app
const app = express();

// Constants
const PORT: number = parseInt(process.env.PORT) || 5000;
const LOG_TAG = "[app.js] ";

// Enable all cors requests
// see https://github.com/expressjs/cors
app.use(cors());

// parse the request body
// this step isn't required for this application since multer is used for parsing 'multipart/form-data'
// still there may be more requests in the future taking 'application/json'
app.use(bodyParser.json());

// making uploaded images statically available
// app.use("/uploads/images", express.static(path.join('uploads', 'images')));

// ADD ROUTES HERE
app.use("/api/pastes", pastesRoutes);
app.use("/api/users", usersRoutes);


///////////////////////////


// For any other endpoint which isn't set, throw 404
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new HttpError("Could not find this route", 404);
    return next(error);
});

// we reach this middleware when an error occurs
app.use((err: Error | HttpError | multer.MulterError, req: Request, res: Response, next: NextFunction) => {
    // Delete any file which may have been added (for rolling back)
    if (req.file) {
        fs.unlink(req.file.path, (err) => {
            // TODO: Optionally add a log for undeleted files for manual deletion of files
            console.log(err);
        });
    }

    // following check prevents sending multiple responses 
    if (res.headersSent) {
        return next(err);
    }

    if (err instanceof multer.MulterError) {
        return res.status(422).json({ message: "File upload error" });
    }

    // set error code and finally return the response
    if ('code' in err) {
        res.status(err.code);
    } else {
        res.status(500);
    }
    res.json({ message: err.message || "Something went wrong." });
});

app.listen(PORT, () => {
    console.log(LOG_TAG, `Server listening on port ${PORT}`);
});
