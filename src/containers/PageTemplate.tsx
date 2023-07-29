import { ReactElement, ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface IProps {
    children?: ReactNode
}

export const PageTemplate = ({ children }: IProps): ReactElement => {
    return (
        <div className="bg-gray-100 bg-home-light bg-cover bg-contain bg-repeat-y  transition dark:bg-light-black dark:bg-home-dark lg:bg-cover">
            <Header />
            {children}
            <Footer />
        </div>
    )
}
