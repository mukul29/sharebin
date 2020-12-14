import { Router } from 'express';
import { oneOf, body } from 'express-validator';

import { login, signup } from '../controllers/users-controllers';
import { validationConfig } from '../values/validation-config';
import HttpError from '../models/http-error';
import { requestFieldNames } from '../values/request-field-names';

const router = Router();

router.post(
    '/login',
    [
        oneOf([
            body(requestFieldNames.USERNAME_OR_EMAIL).trim().normalizeEmail().matches(validationConfig.EMAIL_REGEX),
            body(requestFieldNames.USERNAME_OR_EMAIL).trim().isLength({ max: validationConfig.USERNAME_MAX_LENGTH }).matches(validationConfig.USERNAME_REGEX)
        ]),
        body(requestFieldNames.PASSWORD).isLength({ min: validationConfig.PASSWORD_MIN_LENGTH, max: validationConfig.PASSWORD_MAX_LENGTH }),
    ],
    login
);

router.post('signup',
    [
        body(requestFieldNames.PASSWORD).isLength({ min: validationConfig.PASSWORD_MIN_LENGTH, max: validationConfig.PASSWORD_MAX_LENGTH }),
        body(requestFieldNames.USERNAME).isLength({ max: validationConfig.USERNAME_MAX_LENGTH }).matches(validationConfig.USERNAME_REGEX),
        body(requestFieldNames.EMAIL).normalizeEmail().matches(validationConfig.EMAIL_REGEX)
    ],
    signup
);

export default router;
