import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../scenes/Home'
import { ModalProvider } from '../context/ModalContext'
import { ModalRoot } from './ModalRoot'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
])
export const Router = () => {
    return (
        <ModalProvider>
            <>
                <ModalRoot />
                <RouterProvider router={router} />
            </>
        </ModalProvider>
    )
}
