import { authHelper } from '.';
import { supabase } from './../../superbase/SBconfig';

import { authInfo, onLogin, onLogOut, onModal, signUpUserEmail } from "./authSlice";

interface Props {
    email: string,
    password: string,
    name: string
}


export const startingRegisterUser = (credentials: Props) => {

    const { email, password, name } = credentials;

    return async (dispatch: any) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    name
                }
            }
        });


        if (!error) {

            let { desc, msg } = authHelper();
            dispatch(authInfo({ desc, msg }));
            dispatch(onModal(true));

            return;
        }


        dispatch(signUpUserEmail(data.user));
        dispatch(onModal(false))
    }
}

export const startingLoginOut = () => {
    return (dispatch: any) => {
        dispatch(onLogOut())
    }
}


export const startingLoginUser = (credentials: Props) => {
    const { email, password } = credentials;

    return async (dispatch: any) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            
            let { desc, msg } = authHelper(error.message);
            dispatch(authInfo({ desc, msg }));
            dispatch(onModal(true))
            return;
        }

    
        dispatch(onLogin(data));
    }

}

