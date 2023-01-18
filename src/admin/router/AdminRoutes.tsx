import { Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AdminLayout } from '../components/AdminLayout'
import { adminRoute } from './routes'

export const AdminRoutes = () => {
  return (
      <AdminLayout>
        <Suspense fallback={null}>
          <Routes >
            {
              adminRoute.map(({ Component, path, name }) => (
                <Route key={name} path={path} element={<Component />} />
              ))
            }
            <Route path='/*' element={<Navigate to={'/'} />} />
          </Routes>
        </Suspense>
      </AdminLayout>
  )
}

export default AdminRoutes