import { IUser, ISession } from "../auth/interfaces";

export const sessionStore = (session: ISession, user: IUser): string => {

    if (Boolean(session.access_token) || Boolean(user.aud)) {
        return 'authenticated';
    }

    else if (localStorage.getItem('session')) {
        return 'authenticated';

    } else if (!Boolean(session)) {
        return 'Email not confirmed';
    }

    else {
        return 'Email not confirmed';
    }

}