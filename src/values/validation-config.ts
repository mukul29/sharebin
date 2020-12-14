interface IValidationConfig {
    readonly PASSWORD_MIN_LENGTH: number;
    readonly PASSWORD_MAX_LENGTH: number;
    readonly USERNAME_MAX_LENGTH: number;
    readonly USERNAME_REGEX: RegExp;
    readonly EMAIL_REGEX: RegExp;
}

// Email regex is taken from 
export const validationConfig: IValidationConfig = {
    PASSWORD_MIN_LENGTH: 6, 
    PASSWORD_MAX_LENGTH: 64, 
    USERNAME_MAX_LENGTH: 32, 
    USERNAME_REGEX: /^[a-zA-Z0-9][a-zA-Z0-9_\.]*$/,
    EMAIL_REGEX: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
};
