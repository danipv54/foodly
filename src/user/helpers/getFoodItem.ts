import { IFOOD } from '../interface/IFood';

export const getItem = (query: string, foods: IFOOD[]) => {
   
    if (!foods?.length) {
        let  itemCache= JSON.parse(localStorage.getItem('fooditem')!)
        return itemCache;

    } else{
        let item = foods?.find((item: IFOOD) => item.name == query);
        localStorage.setItem('fooditem', JSON.stringify(item));
           
        return item;
    }
    
}

