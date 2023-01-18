import { supabase } from "../../../superbase";
import { getOrdes } from "./ordersSlice";

export const startingGetAllOrders = () => {

    return async (dispatch: any) => {

        const { data, error } = await supabase
            .from('orders')
            .select("cart,id");


        if (error) {
            console.log(error.message);
            return;
        }

        let orders: any = data.map(item => {
            item.cart.id = item.id;
            return item.cart
        });

        dispatch(getOrdes(orders))

    }
}

export const updatingOrder = (order: any) => {

    return async (dispatch: any) => {

        const {  error } = await supabase
            .from('orders')
            .update({
                "cart": {
                    ...order,
                    foodState: 'delivered'
                }
            })
            .eq('id', order.id)
            .select("*");


        if (error) {
            console.log(error.message);
            return;
        };

       
        dispatch(startingGetAllOrders())

    }

}