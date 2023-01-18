import { supabase } from './../../../superbase/SBconfig';

import { getMenu } from "./FoodSlice"

export const startGettingMenu = () => {
    return async (dispatch: any) => {

        let { data, error } = await supabase
            .from('menu')
            .select("food,id");

        if (error) {
            console.log(error.message)
            return;
        }

        let food: any = data?.map((item: any) => {
            item.food.id = item.id;
            return item.food;
        })

        dispatch(getMenu(food!))
    }

}


export const startUpdatingMenuItem = (item: any) => {

    console.log(item);

    return async (dispatch: any) => {
        const { error } = await supabase
            .from('menu')
            .update({
                "food": {
                    ...item,
                }
            })
            .eq('id', item.id)
            .select("*");

        if (error) {
            console.log(error.message);
            return;
        }

        dispatch(startGettingMenu());
    }


}