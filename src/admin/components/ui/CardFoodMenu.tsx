import { FC } from 'react'
import { IFOOD } from '../../../user/interface/IFood'


interface Props {
    food: IFOOD,
    setFoodItem:(food:IFOOD)=>void
}
export const CardFoodMenu: FC<Props> = ({ food, setFoodItem }) => {

    const getFoodItem=()=>{

        setFoodItem(food)
    }
    return (
        <div className='bg-gray-900 w-60 shadow-lg rounded-lg mt-16 pb-8 lg:ml-16'>

            <img src={`${food.imgFood}`} className=' rounded-tl-lg rounded-tr-lg w-[100%] h-40'
                alt={food.name}
            />

            <div className='px-2 mt-8 flex flex-col justify-between space-y-4 '>
                <h3 className='text-blue-300  font-semibold text-lg'>{food.name}</h3>
                <h3 className='text-blue-300   text-md'>Price: {food.price}$</h3>

                <button onClick={getFoodItem} className=' bg-blue-300 text-gray-800 hover:bg-blue-500 py-1 px-2
                    rounded-xl mb-8'>Edit Food
                </button>
            </div>
        </div>
    )
}
