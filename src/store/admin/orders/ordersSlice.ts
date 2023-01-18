import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFOOD, IOrder } from '../../../user/interface/IFood';

const initialState: IOrder = {
  orders: [],
  uid: 0

}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {

    getOrdes: (state, action: PayloadAction<IFOOD[]>) => {
      state.orders = [...action.payload];
    },

  }
  
});

export const { getOrdes } = ordersSlice.actions