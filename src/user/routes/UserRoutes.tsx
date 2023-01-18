import { Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { MainLayout } from '../../shared'
import { routes } from './routes'

export const UserRoutes = () => {
  return (
    <>
      <MainLayout>
        <Suspense fallback={null}>
          <Routes>
            {
              routes.map(({ Component, path, name }) => (
                <Route key={name} path={path} element={<Component />} />
              ))
            }
            <Route path='/*' element={<Navigate to={'/'} />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </>
  )
}
