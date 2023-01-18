import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { startFetchingOrder } from '../../store/shared';
import { OrderCard } from '../components';
import { IFOOD } from '../interface/IFood';

export const OrderView = () => {
    const dispatch = useAppDispatch();
    let { orders } = useAppSelector(state => state.order);
    useEffect(() => {
        dispatch(startFetchingOrder())
      }, [])

    return (
        <div className='w-fit'>
            {!Boolean(orders.length)
                ? (<h1 className='text-4xl font-bold text-center mt-4 '>No Food in  cart</h1>)
                : (
                    <div className='  mx-auto mt-4 '>
                        <h1 className='text-4xl font-bold text-center '>Food Ordered</h1>
                        {orders?.map((order: IFOOD) => (
                            <OrderCard key={order.id} {...order} />
                        ))}
                    </div>
                )
            }
        </div>
    )
}
