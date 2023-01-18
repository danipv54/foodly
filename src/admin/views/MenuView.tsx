import { useState } from 'react';
import { LoadingCard } from '../../shared/LoadingCardItems';
import { useAppSelector } from '../../store';
import { IFOOD } from '../../user/interface/IFood';
import { EditFoodItem } from '../components/menuActions/EditFoodItem';
import { CardFoodMenu } from '../components/ui';

export const MenuView = () => {
    const { foods } = useAppSelector(state => state.food);
    const [onEditMenu, setOnEditMenu] = useState<boolean>(false);
    const [itemMenu, setItemMenu] = useState<any>();


    const onEditFood = (food: IFOOD) => {
        setOnEditMenu(true)
        setItemMenu( food);
    }


    return (

        <div>
            {onEditMenu &&
                <EditFoodItem food={itemMenu} setOnEditMenu={setOnEditMenu}  />
            }

            <div className='bg-gray-800 rounded-md p-8 mr-4 ' >
          
                <h1 className='text-white text-center font-semibold text-4xl'>MenuView</h1>

                {!foods?.length &&

                    (<LoadingCard></LoadingCard>)

                }

                <div className='grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  lg:p-8  mr-12  sm:mr-0 justify-center'>


                    {foods?.map((food: IFOOD) => (

                        <CardFoodMenu key={food.id} food={food} setFoodItem={onEditFood} />
                    ))

                    }
                </div>
            </div>
        </div>
    )
}
