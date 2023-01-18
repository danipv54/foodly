import { lazy } from "react";
import { IRoute } from "../../shared/interface";

const FQPage       = lazy(() => import('../pages/FQPage'));
const MenuPage     = lazy(() => import('../pages/MenuPage'));
const UserPage     = lazy(() => import('../pages/UserPage'));
const CartPage     = lazy(() => import('../pages/CartPage'));
const SupportPage  = lazy(() => import('../pages/SupportPage'));
const SettingPage  = lazy(() => import('../pages/SettingPage'));
const FoodItemPage = lazy(() => import('../pages/FoodItemPage'));

export const routes: IRoute[] = [

    {
        to: '/',
        path: "/",
        Component: MenuPage,
        name: 'Menu'
    },
    {
        to: '/user',
        path: "user",
        Component: UserPage,
        name: 'User'
    },
    {
        to: '/support',
        path: "support",
        Component: SupportPage,
        name: 'Support'
    },
    {
        to: '/cart',
        path: "cart",
        Component: CartPage,
        name: 'Cart'
    },
    {
        to: '/fq',
        path: "fq",
        Component: FQPage,
        name: 'Frecuent Questions'
    },
    {
        to: '/setting',
        path: "setting",
        Component: SettingPage,
        name: 'Setting'
    },
    {
        to: '/item',
        path: "item/:name",
        Component: FoodItemPage,
        name: 'Item'
    },

]