import { FC, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useAppDispatch } from '../../store'
import { deletingOrder, deliveringOrder } from '../../store/shared'
import { IFOOD } from '../interface/IFood'

export const OrderCard: FC<IFOOD> = ({ foodState, imgFood, isPaid, ingredients, price, notes, quatity = 1,
    name, id, category, }) => {

    const { user_metadata } = JSON.parse(localStorage.getItem('user')!);
    const [orderQuatity, setoOrderQuatity] = useState(quatity);

    let user = user_metadata.name;

    const dispatch = useAppDispatch();
    const notify = (name: string) => toast(`Your order:${name} have been sent!`);

    const onQuatity = (quatities: any) => {
        if (!orderQuatity) setoOrderQuatity(1);
        setoOrderQuatity(prev => prev + quatities);
    }

    const onGetOrder = () => {
        let order: IFOOD = {
            user,
            id,
            foodState: "cooking",
            imgFood,
            isPaid,
            ingredients,
            price,
            notes,
            name,
            quatity: orderQuatity,
            category
        }
        notify(name)

        dispatch(deliveringOrder(order))
    }

    const onCancelOrder = (id: number) => {
        dispatch(deletingOrder(id))
    }

    const getFoodState = (status: string) => {
        switch (status) {
            case 'cooking':
                return 'bg-yellow-300'

            case 'reserved':
                return 'bg-blue-300'

            case 'delivered':
                return 'bg-green-300'

            default:
                return '';
        }
    }

    return (
        <>

            <div>

                <ToastContainer />
            </div>
            <div className='bg-white shadow-lg rounded-lg flex p-4 space-x-4 my-8
                animate__animated animate__fadeIn'
            >
                <img src={`${imgFood}`} className="w-32 rounded-lg object-cover" alt={name} />
                <div className='md:flex-row flex flex-col  justify-center space-y-3'>


                    <div className='flex flex-col   animate__animated animate__fadeIn'>
                        <p className="mb-2" >Status:
                            <span className={`${getFoodState(foodState!)} w-fit px-2 py-1 rounded-lg ml-1`}>
                                {foodState?.toUpperCase()}
                            </span>
                        </p>

                        <h2>Pedido: {name}  {foodState == 'cooking' ? `(${quatity})` : ''}</h2>

                        <span>{notes ? 'Notes: ' + notes : ''}</span>

                        <p>Price: ${price}</p>
                        <p>Ingredientes: {ingredients.join(", ")}</p>

                        <div className={` ${foodState == 'reserved' ? 'block' : 'hidden'} flex justify-center md:justify-start  space-x-3 mt-4`}>
                            <button className='bg-red-500 rounded-full  shadow-md p-1'
                                onClick={() => onQuatity(-1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                </svg>
                            </button>

                            <span>{orderQuatity}</span>

                            <button className={`bg-blue-500 rounded-full shadow-md p-1`}
                                onClick={() => onQuatity(+1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>

                        </div>

                    </div>

                    <button onClick={onGetOrder}
                        className={`  ${foodState == 'reserved' ? 'block' : 'hidden'} bg-green-400 h-fit
                     px-4 self-stretch rounded-md shadow-md  hover:bg-green-600 mr-2  text-white`}
                    >
                        Buy it for ${price}
                    </button>

                    <button onClick={() => onCancelOrder(id)}
                        className={` ${foodState == "delivered" ? 'hidden' : ''}  bg-red-400 h-fit px-4 
                    self-stretch rounded-md shadow-md  hover:bg-red-600  text-white
                    `}
                    >
                        Cancel order
                    </button>
                </div>
            </div>
        </>
    )
}
