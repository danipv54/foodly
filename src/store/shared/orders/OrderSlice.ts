import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart, IFOOD } from '../../../user/interface/IFood';

const initialState: Cart = {
    user: '',
    id: 0,
    name: '',
    price: 0,
    isPaid: false,
    foodState: null,
    ingredients: [''],
    category: '',
    imgFood: '',
    quatity: 0,
    cart: localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')!) : [],
    orders: [],
    uid: 0
}

export const orderSlice = createSlice({

    name: 'order',
    initialState,

    reducers: {
        startGettingOrders: (state, action: PayloadAction<IFOOD>) => {
            let orderCache = localStorage.getItem('order')!;

            if (orderCache) {
                let cache = JSON.parse(orderCache) as IFOOD[];
                state.cart = [...cache]
            }
        },

        getOrder: (state, action: PayloadAction<IFOOD>) => {
            const validate = state.cart.some(
                item =>
                    item.id === action.payload.id
                    && item.name == action.payload.name
            );

            if (validate) {
                state.cart = state.cart.map((item: IFOOD) => {

                    if (item.id === action.payload.id) {
                        item.quatity += action.payload.quatity;
                    }

                    return item;
                });
            }

            state.cart = [action.payload, ...state.cart];
            localStorage.setItem('order', JSON.stringify(state.cart))!;
        },

        getCancelOrder: (state, action: PayloadAction<any>) => {

            if (!state.cart) {
                let orderCache = JSON.parse(localStorage.getItem('order')!) as IFOOD[];

                state.cart = orderCache.filter((order: IFOOD) => order.id !== action.payload);
                localStorage.setItem('order', JSON.stringify(state.cart));

            } else {
                state.cart = state.cart.filter((order: IFOOD) => order.id !== action.payload);
                localStorage.setItem('order', JSON.stringify(state.cart))
            }

            state.orders = state.orders.filter((order: IFOOD) => order.id !== action.payload)!;
        },

        removeItemFromCart: (state, action: PayloadAction<IFOOD>) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
            localStorage.setItem('order', JSON.stringify(state.cart));
        },

        getOrderd: (state, action: PayloadAction<IFOOD[]>) => {
            state.orders = [...action.payload];
        },

        getOrderId: (state, action: PayloadAction<any>) => {
            state.uid = action.payload;
        },

        getFoodOrderd: (state, action: PayloadAction<IFOOD>) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
            state.orders = [action.payload]
            localStorage.setItem('order', JSON.stringify(state.cart));
        }
    }


});

export const {
    startGettingOrders,
    getOrder,
    getCancelOrder,
    removeItemFromCart,
    getOrderd,
    getOrderId,
    getFoodOrderd
} = orderSlice.actions;
