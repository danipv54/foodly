import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ordersSlice } from './admin/orders';
import { AuthSlice } from './auth/authSlice';
import { foodSlice } from "./shared/foodMenu/FoodSlice";
import { orderSlice } from "./shared/orders/OrderSlice";

export const store = configureStore({
    reducer: {
        // Admin
        orders: ordersSlice.reducer,

        food: foodSlice.reducer,
        order: orderSlice.reducer,
        auth: AuthSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;


export default store