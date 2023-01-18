import { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { startGettingMenu } from '../../store/shared';
import { MenuView } from "../views/MenuView";

export const Menu = () => {
  
  const dispatch = useAppDispatch();
  useEffect(() => {
      dispatch(startGettingMenu());
  });

  return (
    <div className='animate__animated animate__fadeIn '>


      <MenuView></MenuView>
    </div>
  )
}

export default Menu