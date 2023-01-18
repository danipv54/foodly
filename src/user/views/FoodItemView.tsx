import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { ConfirmOrder } from '../components';
import { getItem } from '../helpers/getFoodItem';
import NoFoundPage from '../pages/NoFoundPage';


export const FoodItem = () => {
  const [confirmOrder, setConfirmOrder] = useState(false);
  const { foods } = useAppSelector(state => state.food);
  const { name } = useParams();

  let query = decodeURI(name!)

  if (!foods?.length && !localStorage.getItem('fooditem')?.includes(query)) {
    return (
      <NoFoundPage></NoFoundPage>
    )
  }

  let item: any = getItem(query, foods!);

  return (
    <>
      {confirmOrder &&
        <ConfirmOrder foodOrder={item} openModal={setConfirmOrder} ></ConfirmOrder>
      }

      <div className=' mt-16 lg:flex justify-center items-center mb-4 px-8 sm:px-1 md:px-1  ml-40 2xl:ml-0   animate__animated animate__fadeIn '
      >

        <div className='lg:w-3/5 rounded-2xl bg-slate-100'>
          <img className=' rounded-lg shadow-lg sm:w-11/12' src={`${item?.imgFood}`} alt={item.name} />
        </div>

        <div className='flex flex-col justify-center sm:pl-8 sm:mt-8 space-y-4'>
          <div className='flex space-x-9'>
            <p className='text-sm'>{item.category}</p>
          </div>

          <h1 className='text-3xl my-4 lg:w-8/12 font-bold'>{item.name}</h1>
          <p className='font-semibold'>Price ${item.price} USD</p>

          <button onClick={() => setConfirmOrder(true)} className=' bg-blue-300 text-gray-800
             hover:bg-blue-500 py-1 px-2 rounded-xl mb-10 w-[90%] lg:w-full'>
            Add cart
          </button>
        </div>

      </div>

    </>

  )
}