import { cloneElement } from 'react'
import { ModalConsumer } from '../context/ModalContext'

export const ModalRoot = () => (
    <ModalConsumer>
        {({ component, props, hideModal }) =>
            component ? (
                <div
                    className="fixed inset-0 z-50 backdrop-blur"
                    onClick={hideModal}
                >
                    {cloneElement(component, {
                        ...props,
                        onRequestClose: hideModal,
                    })}
                </div>
            ) : null
        }
    </ModalConsumer>
)
