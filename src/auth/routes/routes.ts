import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

export interface IRoute {
    name?: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    path: string
    to: string

}


const LoginPage= lazy(()=> import('../pages/LoginPage'))
const RegisterPage= lazy(()=> import('../pages/RegisterPage'))



export const routes: IRoute[] = [

    {
        to: '/login',
        path: "login",
        Component: LoginPage,
        name: 'login'
    },
    {
        to: '/register',
        path: "register",
        Component: RegisterPage,
        name: 'register'
    },

]