// Datamodel for HttpErrors
export default class HttpError extends Error {
    code: number;

    constructor(message: string, errorCode: number) {
        super(message);
        this.code = errorCode;
    }
}

// import and use this in a middleware with
// throw new HttpError(<message>, <code>)
// or 
// return next(new HttpError(<message>, <code>))

// module.exports = HttpError;