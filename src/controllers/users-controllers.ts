import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

import HttpError from '../models/http-error';
import { requestFieldNames } from '../values/request-field-names';
import { validationConfig } from '../values/validation-config';

const LOG_TAG = `[${__filename.slice(__dirname.length + 1)}] `;

export const login = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    
    console.log(errors);
    
    if(!errors.isEmpty()) {
        return next(new HttpError('INVALID_INPUTS', 422));
    }
    
    if(validationConfig.EMAIL_REGEX.test(req.body.usernameOrEmail)) {
        // login with username
        res.status(200).json({ message: 'Login with email' });
    } else if (validationConfig.USERNAME_REGEX.test(req.body.usernameOrEmail)) {
        res.status(200).json({ message: 'Login with username' });
        // login with email
    }

}

export const signup = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    console.log(errors);
    if(!errors.isEmpty()) {
        return next(new HttpError('Cannot login', 422));
    }
    res.status(201).json({ message: 'Signup' });
}
