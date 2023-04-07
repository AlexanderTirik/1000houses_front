import { CloseIcon } from '@assets/icons/CloseIcon'

interface IProps {
    onRequestClose?: () => void
    title: string
}

export const ModalHeader = ({ title, onRequestClose }: IProps) => {
    return (
        <header className="relative mb-7 flex items-center justify-center">
            <span className="text-lg text-black dark:text-white">{title}</span>

            <button onClick={onRequestClose} className="absolute right-0">
                <CloseIcon />
            </button>
        </header>
    )
}
