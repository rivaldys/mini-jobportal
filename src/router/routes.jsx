import { Detail, Home, Login } from '@/pages'
import { Navigate } from 'react-router-dom'

const routes = [
    {
        name: 'Login',
        path: '/auth',
        element: <Navigate to="/auth/login" replace />,
        meta: {}
    },
    {
        name: 'Login',
        path: '/auth/login',
        element: <Login />,
        meta: {}
    },
    {
        name: 'Home',
        path: '/',
        element: <Home />,
        meta: {}
    },
    {
        name: 'Detail',
        path: '/detail/:id',
        element: <Detail />,
        meta: {}
    }
]

export default routes