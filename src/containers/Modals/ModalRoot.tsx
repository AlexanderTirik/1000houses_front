import { cloneElement, useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'

export const ModalRoot = () => {
    const { component, props, hideModal } = useContext(ModalContext)

    return component ? (
        <div
            className="fixed inset-0 z-50 backdrop-blur"
            // onClick={hideModal}
        >
            {cloneElement(component, {
                ...props,
                onRequestClose: hideModal,
            })}
        </div>
    ) : null
}
