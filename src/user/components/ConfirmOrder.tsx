import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../store'
import { startingOrder } from '../../store/shared/orders/thunk'
import { IFOOD } from '../interface/IFood'

interface Props {
    openModal: React.Dispatch<React.SetStateAction<boolean>>
    foodOrder: IFOOD
}

export const ConfirmOrder: FC<Props> = ({ foodOrder, openModal }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const [noteOrder, setNoteOrder] = useState<string | null>(null);

    const ongGetOrder = () => {
        let order: IFOOD | any = {
            ...foodOrder,
            foodState: 'reserved',
            notes: noteOrder!
        }

        dispatch(startingOrder(order));
        navigate('/cart')
    }

    return (
        <div className='bg-slate-800/50 w-full h-full absolute top-0 z-10 animate__animated
            animate__animated animate__fadeIn'
        >
            <div className='bg-white w-[35%] mx-auto h-auto  grid mt-32 rounded-lg shadow-lg p-8'>
                <h1 className='text-center  font-black '>
                    <span className='font-medium'>You order is:</span> {foodOrder.name}
                </h1>

                <div className='flex space-x-10'>
                    <img className='w-32 h-32 rounded-lg' src={`${foodOrder.imgFood}`} alt={foodOrder.name} />

                    <div>
                        <h3 className='font-semibold'>Ingredients:</h3>

                        <ul>
                            {
                                foodOrder.ingredients.map(ingredient => (
                                    <ol key={ingredient}>-{ingredient} </ol>
                                ))
                            }
                        </ul>

                        <label className='block mt-8' htmlFor="">Any note ?</label>

                        <input type="text" className='shadown-md bg-slate-200  p-2 rounded-md'
                            placeholder='No onion' onChange={(e) => setNoteOrder(e.target.value)}
                        />
                    </div>

                </div>

                <div className='space-x-10 mt-8 flex justify-center flex-shrink-0'>
                    <button className='bg-red-500 hover:bg-red-800  px-4 py-2 rounded-lg shadow-md
                     text-white'
                        onClick={() => openModal(false)}>Cancel Order
                    </button>

                    <button className='bg-blue-500 hover:bg-blue-800  px-4 py-2 rounded-lg shadow-md
                     text-white'
                        onClick={ongGetOrder}>Buy for ${foodOrder.price}
                    </button>
                </div>
            </div>
        </div>
    )
}

