import { lazy } from "react";
import { IRoute } from "../../shared/interface";

const UsersPage= lazy(()=> import('../pages/UserPage'))
const MenuPage= lazy(()=> import('../pages/Menu'))
const OrdersPage= lazy(()=> import('../pages/OrderPage'))


export const adminRoute: IRoute[] = [

    {
        to: '/',
        path: "/",
        Component: OrdersPage,
        name: 'orders'
    },

    {
        to: '/menu',
        path: "menu",
        Component: MenuPage,
        name: 'menu'
    },

    {
        to: '/users',
        path: "users",
        Component: UsersPage,
        name: 'users'
    },

]