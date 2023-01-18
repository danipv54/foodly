import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFOOD } from '../../../user/interface/IFood'

const initialState: IFOOD = {
    user: '',
    id: 0,
    name: '',
    price: 0,
    isPaid: false,
    foodState: null,
    ingredients: [''],
    category: '',
    imgFood: '',
    foods: [],
    quatity: 0
};

export const foodSlice = createSlice({
    name: 'foodMenu',
    initialState,

    reducers: {
        getMenu: (state, action: PayloadAction<IFOOD[]>) => {
            state.foods = action.payload
        },

        
    },
})

export const { getMenu } = foodSlice.actions
