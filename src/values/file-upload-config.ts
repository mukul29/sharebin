import multer from "multer";

interface IFileUploadConfig {
    readonly SIZE_LIMIT_IN_BYTES: number;
    readonly NUM_FILES_LIMIT?: number,
    readonly UPLOAD_PATH: string,
}

export const fileUploadConfig: IFileUploadConfig = {
    SIZE_LIMIT_IN_BYTES: 24 * 1024 * 1024,
    NUM_FILES_LIMIT: 1,
    UPLOAD_PATH: 'uploads/pastes',
}
