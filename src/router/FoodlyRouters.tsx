import { Navigate, Route, Routes } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import { sessionStore } from '../helpers'
import { useAppSelector } from '../store'
import { role } from './role'

type JSXComponent = () => JSX.Element;

export const FoodlyRouter = () => {
  let { user, session } = useAppSelector(state => state.auth);
  let getValue = sessionStore(user, session);

  const RoleRoutes: JSXComponent = role(user);

  return (
    <div className='animate__animated animate__fadeIn '>

      <Routes>
        {
          getValue == "authenticated"
            ? (<Route path='/*' element={<RoleRoutes />} />)

            : (<Route path='/auth/*' element={<AuthRoutes />} />)
        }
        <Route path='/*' element={<Navigate to={'/auth/login'} />} />

      </Routes>
      
    </div>
  )
}
