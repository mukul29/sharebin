interface IRequestFieldNames {
    readonly PASSWORD: string;
    readonly USERNAME_OR_EMAIL: string;
    readonly USERNAME: string;
    readonly EMAIL: string;
    readonly PASTE: string;
}

export const requestFieldNames: IRequestFieldNames = {
    PASSWORD: 'password', 
    USERNAME_OR_EMAIL: 'usernameOrEmail',
    USERNAME: 'username',
    EMAIL: 'email',
    PASTE: 'paste'
};
