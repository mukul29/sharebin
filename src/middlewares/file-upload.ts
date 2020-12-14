import multer from "multer";
import { v1 as uuidv1 } from "uuid";

import { fileUploadConfig } from "../values/file-upload-config";

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        // Upload path
        callback(null, fileUploadConfig.UPLOAD_PATH)
    },
    // get the extension from the mimetype and save the file with a unique filename
    filename: (req, file, callback) => {
        callback(null, uuidv1())
    },
})

const fileUpload = multer({
    limits: {
        fileSize: fileUploadConfig.SIZE_LIMIT_IN_BYTES,
        files: fileUploadConfig.NUM_FILES_LIMIT,
    },
    storage: storage,
});

export default fileUpload;
