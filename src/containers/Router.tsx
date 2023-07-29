import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../scenes/Home'
import { ModalProvider } from '../context/ModalContext'
import { ModalRoot } from './Modals/ModalRoot'
import { AccountProvider } from '../context/AccountContext'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from '../context/ThemeContext'
import { WalletProvider } from '../context/WalletContext'
import { AuthProvider } from '../context/AuthContext'
import { RoutesEnum } from '../enums/RoutesEnum'
import { Strategy } from '@scenes/Strategy'

const router = createBrowserRouter([
    {
        path: RoutesEnum.HOME,
        element: <Home />,
    },
    {
        path: RoutesEnum.STRATEGY,
        element: <Strategy />,
    },
])
export const Router = () => {
    return (
        <ModalProvider>
            <AuthProvider>
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
            </AuthProvider>
        </ModalProvider>
    )
}
