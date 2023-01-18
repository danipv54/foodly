import { supabase } from './../../../superbase/SBconfig';
import { IFOOD } from '../../../user/interface/IFood';
import { getCancelOrder, getFoodOrderd, getOrder, getOrderd, removeItemFromCart } from './OrderSlice';


export const startingOrder = (order: IFOOD) => {
    return async (dispatch: any, ): Promise<void> => {
        dispatch(getOrder(order))
    }
}


export const deletingOrder = (id: number) => {
    return async (dispatch: any) => {

        const { error } = await supabase
            .from('orders')
            .delete()
            .eq('id', id);

        if (error) {
            return;
        }

        dispatch(getCancelOrder(id))
    }
}

export function deliveringOrder(order: IFOOD) {
    return async (dispatch: any, getState: any) => {

        let id = await dispatch(startFetchingOrderID());

        const { error } = await supabase
            .from('orders')
            .insert({ cart: order, userId: id })
            .select('cart');

        const { data } = await supabase
            .from('orders')
            .select('cart')


        if (error) {
            return
        }

        let orders: IFOOD | any = data?.map(item => {
            return item.cart
        })

        dispatch(removeItemFromCart(order))
        dispatch(getFoodOrderd(orders))
    }

}

export const startFetchingOrder = () => {
    return async (dispatch: any) => {

        let id = await dispatch(startFetchingOrderID());

        const { data, error } = await supabase
            .from('orders')
            .select('cart,id')
            .eq('userId', id)
            .select('*');

        if (error) {
            return;
        }

        let orders: any = data.map(item => {
            item.cart.id = item.id;
            return item.cart
        });

        dispatch(getOrderd(orders))
    }
}

export const startFetchingOrderID = () => {
    return async () => {
        const { data: data } = await supabase.auth.getUser();
        const { user } = data;

        return user?.id;
    }

}