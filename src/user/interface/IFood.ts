export interface IFOOD {
    user:string,
    id:number
    name: string,
    price: number,
    isPaid: boolean,
    foodState: 'reserved' | 'cooking' | 'delivered' | 'cancel' | null,
    ingredients: string[],
    category: 'desert' | 'dominican' |'fastfood' | 'china' | ' italiana'| '' ,
    imgFood:  string  |string[], 
    foods?:any[] ;
    notes?:string
    quatity:number
} 

export interface Cart extends IFOOD {

    cart:IFOOD[]
    orders:IFOOD[]
    uid?:number 
}

export interface IOrder{
    orders:IFOOD[];
    uid?:number 
}