import { useAppDispatch } from '../../../store';
import { updatingOrder } from '../../../store/admin/orders/thunk';
import { IFOOD } from '../../../user/interface/IFood';

export const OrderState = ({ foodId, orders, openModal }: any) => {
    const order: IFOOD = orders.find((item: IFOOD) => item.id == foodId);
    const { name, imgFood, ingredients, user }: IFOOD = order;

    const dispatch = useAppDispatch();

    const updateorder = (order: IFOOD) => {

        dispatch(updatingOrder(order))
    }

    return (
        <>
            <div className='bg-slate-800/50 w-full h-full bg-gray-900 absolute z-10 bg-opacity-80 top-0  sticky-0 animate__animated animate__animated animate__fadeIn '>

                <div className='bg-white w-[35%] mx-auto h-auto  grid mt-32 rounded-lg shadow-lg p-8'>
                    <h1 className='text-center ml-20  font-black mb-2 '>
                        {user?.toUpperCase()}'s order:
                    </h1>

                    <h2 className='text-center ml-20  font-semibold  '>
                        {name}
                    </h2>

                    <div className='flex space-x-10'>
                        <img className='w-32 h-32 rounded-lg' src={`${imgFood}`} alt="" />

                        <div>
                            <h3 className='font-semibold'>Ingredients:</h3>

                            <ul>
                                {
                                    ingredients.map(ingredient => (
                                        <ol key={ingredient}>-{ingredient} </ol>
                                    ))
                                }
                            </ul>

                        </div>

                    </div>


                    <div className='space-x-10 mt-8 flex justify-center flex-shrink-0'>
                        <button className='bg-red-500 hover:bg-red-800  px-4 py-2 rounded-lg shadow-md
                              text-white'
                            onClick={() => openModal(false)}
                        >Close order
                        </button>

                        <button className='bg-blue-500 hover:bg-blue-800  px-4 py-2 rounded-lg shadow-md
                             text-white'
                            onClick={() => updateorder(order)}>Mark as deliverd
                        </button>

                    </div>
                </div>
            </div>

        </>
    )
}
