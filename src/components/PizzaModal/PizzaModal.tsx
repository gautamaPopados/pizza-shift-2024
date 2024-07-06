import { createPortal } from 'react-dom';
const mountElement = document.getElementById("overlays-root");
import InnerModal from './InnerModal';

const PizzaModal = ({isOpen, onClose, pizza} : ModalProps) => {
    if (!isOpen) return null;

    return (
        createPortal(InnerModal({isOpen, pizza, onClose}), mountElement)
    )
}

export default PizzaModal;