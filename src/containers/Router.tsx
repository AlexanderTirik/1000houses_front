import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../scenes/Home'
import { ModalProvider } from '../context/ModalContext'
import { ModalRoot } from './Modals/ModalRoot'
import { AccountProvider } from '../context/AccountContext'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from '../context/ThemeContext'
import { WalletProvider } from '../context/WalletContext'

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
                <WalletProvider>
                    <ThemeProvider>
                        <>
                            <ModalRoot />
                            <ToastContainer />
                            <RouterProvider router={router} />
                        </>
                    </ThemeProvider>
                </WalletProvider>
            </AccountProvider>
        </ModalProvider>
    )
}
