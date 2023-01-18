import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {  routes } from './routes'

export const AuthRoutes = () => {
  return (
    <div className='animate__animated animate__fadeIn '>
    <Suspense fallback={null}>

      <Routes>
        {routes.map(({ Component, name, path }) => (
          <Route key={name} path={path} element={<Component />}>

          </Route>

))}
        <Route path='/*' element={<Navigate to={'/login'} />} />
      </Routes>
    </Suspense>

</div>


  )
}

export default AuthRoutes