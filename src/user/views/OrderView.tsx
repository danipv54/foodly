import { useAppSelector } from '../../store';
import { OrderCard } from '../components';
import { IFOOD } from '../interface/IFood';

export const OrderView = () => {
    let { orders } = useAppSelector(state => state.order);

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
