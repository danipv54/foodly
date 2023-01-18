import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { startFetchingOrder } from '../../store/shared';
import { EmptyCartPage } from '../pages/EmptyCartPage';
import { CartView, OrderView } from '../views/';

export const CartPage = () => {
  const dispatch = useAppDispatch();
  const [showView, setshowView] = useState('CartView');
  let { cart, orders } = useAppSelector(state => state.order);

  useEffect(() => {
    dispatch(startFetchingOrder())
  }, [])

  if (!cart.length && !orders?.length) {
    return (
      <EmptyCartPage></EmptyCartPage>
    )
  }

  return (
    <div className=' flex flex-col  mt-8'>

      <nav className=' md:mx-auto w-fit ml-60'>
        <button className={`px-4 py-2 shadow-md rounded-md ${showView == 'CartView' ? 'bg-blue-300' : ''}`}
          onClick={() => setshowView('CartView')}> Cart Orders
        </button>

        <button className={`px-4 py-2 shadow-md rounded-md ${showView == 'OrderView' ? 'bg-blue-300' : ''}`}
          onClick={() => setshowView('OrderView')}>  Food Orders
        </button>
      </nav>

      <div className='lg:mx-auto w-fit ml-32'>
        {showView == 'CartView'

          ? (<CartView />)
          : (<OrderView />)
        }
      </div>
    </div>
  )
}

export default CartPage