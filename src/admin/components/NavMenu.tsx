import { NavLink } from 'react-router-dom'
import { useAppDispatch } from '../../store'
import { onLogOut } from '../../store/auth'

export const NavMenu = () => {
  const dispatch = useAppDispatch()
  const handleLogOut = () => {

    dispatch(onLogOut())
  }
  
  return (
    <>

      <div className='bg-gray-800 py-4  flex '>
        <h1 className='text-white text-4xl font-bold ml-4 '>Admin Panel</h1>

        <ul className='flex  text-white space-x-20 text-2xl mx-auto'>
          <li> <NavLink className={({ isActive }) => isActive ? 'text-blue-300' : 'text-white'} to='/' >Orders </NavLink></li>
          <li > <NavLink className={({ isActive }) => isActive ? 'text-blue-300' : 'text-white'} to='/menu'>Menu </NavLink></li>
          <li ><NavLink className={({ isActive }) => isActive ? 'text-blue-300' : 'text-white'} to='/users'>Users </NavLink></li>
        </ul>

        <button className='text-black bg-blue-300 hover:bg-blue-500 px-4 rounded-lg shadow-lg mr-4' onClick={handleLogOut}>
          Log out
        </button>
      </div>


    </>
  )
}
