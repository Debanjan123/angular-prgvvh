export class User {
    userId: string;
    password: string;
    isAuthorized: boolean;
}
export class LoginReponse {
    CorrelationId: string;
    ResponseCode: string;
    ResponseMessage: string;
    token: string;
    tokenLife: number;
    user?: User;
}