import { useAppSelector } from '../../store';
import { OrderCard } from '../components';
import { IFOOD } from '../interface/IFood';

export const CartView = () => {
    let { cart } = useAppSelector(state => state.order);

    if (!Boolean(cart.length)) {
        let orderCache = localStorage.getItem('order')!
        cart = JSON.parse(orderCache);
    }

    return (
        <div className='w-fit'>
            {!Boolean(cart?.length)
                ? (<h1 className='text-4xl font-bold text-center mt-4 '>No Food in  cart</h1>)
                : (
                    <div>
                        <h1 className='text-4xl font-bold text-center mt-8 '>Food cart</h1>

                        {cart.map((order: IFOOD) => (
                            <OrderCard key={order.id} {...order} />
                        ))}
                    </div>
                )
            }
        </div>
    )
}
