import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../scenes/Home'
import { ModalProvider } from '../context/ModalContext'
import { ModalRoot } from './ModalRoot'
import { AccountProvider } from '../context/AccountContext'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from '../context/ThemeContext'

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
                <ThemeProvider>
                    <>
                        <ModalRoot />
                        <ToastContainer />
                        <RouterProvider router={router} />
                    </>
                </ThemeProvider>
            </AccountProvider>
        </ModalProvider>
    )
}
