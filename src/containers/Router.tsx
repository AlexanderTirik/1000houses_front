import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../scenes/Home'
import { ModalProvider } from '../context/ModalContext'
import { ModalRoot } from './ModalRoot'
import { AccountProvider } from '../context/AccountContext'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
])
export const Router = () => {
    return (
        <ModalProvider>
            <AccountProvider>
                <>
                    <ModalRoot />
                    <RouterProvider router={router} />
                </>
            </AccountProvider>
        </ModalProvider>
    )
}
