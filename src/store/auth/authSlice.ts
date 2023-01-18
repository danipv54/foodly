import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser, ISession } from "../../auth/interfaces";


interface Props {
    email: string,
    password: string,
    user?: IUser | any,
    open?: boolean,
    session?: ISession | any
    authMessage:string;
    authDesc:string
}

const initialState: Props = {
    email: '',
    password: '',
    user: {},
    session: {},
    authMessage: '',
    authDesc: '',
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {

        signUpUserEmail: (state, action: PayloadAction<any>) => {
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            state.open = true;

            if (!state.user) {
                state.user = JSON.parse(localStorage.getItem('user')!) as IUser;
            }

            state.user = action.payload.user;
        },

        onLogOut: (state: any) => {
            state.user = {}
            state.session = {}

            location.reload();
            localStorage.removeItem('user');
            localStorage.removeItem('session');
            localStorage.removeItem('sb-nzagubnofhnwizvxisfh-auth-token');
        },

        onLogin: (state, action: PayloadAction<any>) => {
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            localStorage.setItem('session', JSON.stringify(action.payload.session));

            if (!state.user) {
                state.user = JSON.parse(localStorage.getItem('user')!) as IUser;
                state.session = JSON.parse(localStorage.getItem('session')!) as ISession;
            }

            state.user = action.payload.user;
            state.session = action.payload.session;
        },

        onModal: (state, action: PayloadAction<any>) => {
            state.open = action.payload;
        },

        authInfo:(state, action:PayloadAction<any>)=>{
            state.authMessage= action.payload.msg;
            state.authDesc= action.payload.desc;
        }

        
    }

});


export const { signUpUserEmail, onLogOut, onLogin, onModal,authInfo } = AuthSlice.actions