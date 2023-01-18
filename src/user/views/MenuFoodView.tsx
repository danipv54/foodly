import { useEffect } from 'react'
import { LoadingCard } from '../../shared/LoadingCardItems'
import { useAppDispatch, useAppSelector } from '../../store'
import { startGettingMenu } from '../../store/shared/foodMenu/thunks'
import { NavMenu } from '../components'
import { CardItems } from '../components/CardItems'
import { IFOOD } from '../interface/IFood'


export const MenuFood = () => {
  const { foods }: IFOOD = useAppSelector(state => state.food)! || [];
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startGettingMenu());

  }, [])


  return (
    <div className='space-x-32 '>

      <NavMenu />
      <div className='flex flex-col  w-[92%] animate__animated animate__fadeIn  '>


        <div className='bg-gray-800 h-full  grow   mt-8 rounded-lg mb-2 p-8'>
          <h2 className='text-gray-300 text-center text-2xl font-semibold'>Busca lo que más disfrutas, a la hora de comer!</h2>
          {!foods?.length &&

            (<LoadingCard></LoadingCard>)

          }
          <div className='grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  lg:p-8  mr-12  sm:mr-0 justify-center'>
            {
              foods?.map((food: IFOOD) => (
                <CardItems key={food.id} food={food} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
