import { useEffect } from 'react'
import { useAppDispatch } from '../../store'
import { startingGetAllOrders } from '../../store/admin/orders/thunk';
import { OrdersView } from '../views/'

const OrderPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startingGetAllOrders());
  }, []);

  return (
    <div className='animate__animated animate__fadeIn '>
      <OrdersView></OrdersView>
    </div>
  )
}

export default OrderPage