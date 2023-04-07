import React, { ReactElement, createContext, useState } from 'react'

interface IModalContext {
    component: ReactElement | null
    props?: Object
    showModal: (component: ReactElement | null, props?: Object) => void
    hideModal: () => void
}

export const ModalContext = createContext({
    component: null,
    props: undefined,
    showModal: () => {},
    hideModal: () => {},
} as IModalContext)

interface IProps {
    children: ReactElement
}

export const ModalProvider = ({ children }: IProps) => {
    const [component, setComponent] = useState<ReactElement | null>(null)
    const [props, setProps] = useState<Object>()

    const showModal = (component: ReactElement | null, props?: Object) => {
        setComponent(component)
        setProps(props)
    }
    const hideModal = () => {
        setComponent(null)
        setProps(undefined)
    }
    return (
        <ModalContext.Provider
            value={{ component, showModal, props, hideModal }}
        >
            {children}
        </ModalContext.Provider>
    )
}
