import { Router } from "express";

import { getIndex, getPasteById, createPaste } from '../controllers/pastes-controllers';
import fileUpload from "../middlewares/file-upload";
import { requestFieldNames } from "../values/request-field-names";

const router = Router();

// TODO: Return help like how it's done in paste.rs
router.get('/', getIndex);
router.get('/:id', getPasteById);

// upload file to disk storage
// encrypt file using a random key
// finally create the paste in db and rename the file with the id
// of the paste from database (in base 62)
router.post('/',
    fileUpload.single(requestFieldNames.PASTE),
    // encryptFile,
    createPaste
    );

export default router;
