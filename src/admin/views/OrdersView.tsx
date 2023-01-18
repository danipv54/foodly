import { useState } from 'react';
import { useAppSelector } from '../../store';
import { OrderLayout } from '../components/OrderLayout';
import { CardSkeleton } from '../components/ui/CardSkeleton';
import { NewOrders } from '../components/ui/NewOrders';
import { OrderDeliverd } from '../components/ui/OrderDeliverd';
import { OrderState } from '../components/ui/OrderState';

export const OrdersView = () => {
  const { orders } = useAppSelector(state => state.orders);
  const [foodId, setFoodId] = useState<number>();
  const [opeModal, setOpenModal] = useState<boolean>();


  return (
    <>
      {
        opeModal && <OrderState foodId={foodId} orders={orders} openModal={setOpenModal} ></OrderState>
      }

      <div className='flex justify-center space-x-10 animate__animated animate__fadeIn ' >
        <OrderLayout>
          {!orders.length
            ? <CardSkeleton />
            :
            orders.map(order => {
              if (order.foodState == 'cooking') {
                return (
                  <NewOrders key={order.id} order={order} setFoodId={setFoodId} openModal={setOpenModal} />
                );
              }
            })
          }
        </OrderLayout>

        <OrderLayout>
          {
            !orders.length ? <CardSkeleton /> :
              orders.map(order => {
                if (order.foodState == 'delivered') {
                  return (
                    <OrderDeliverd key={order.id} order={order} />
                  );
                }
              })
          }
        </OrderLayout>
      </div>
    </ >
  )
}

