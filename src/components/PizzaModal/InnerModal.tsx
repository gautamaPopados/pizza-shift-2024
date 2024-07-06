import { useEffect, useState } from 'react'
import { Cross } from '../../assets'
import { BASE_URL } from '../../utils/constants/constants'
import './InnerModal.css'

const InnerModal = ({ isOpen, onClose, pizza }: ModalProps) => {

    const [isVisible,setIsVisible] = useState(false)

    const closeHandle = () => {
        setIsVisible(false)
        setTimeout(() => {
        onClose();
        }, 300)
     }

    useEffect(()=> {
        setTimeout(()=> {
            setIsVisible(true)
        }, 0)
    }, [isOpen])

    return (
        <div className={isVisible ? 'modal-wrapper active' : 'modal-wrapper'}>

            <div className="modal-container">
                <div className="modal-header">
                    <div className="modal-line">
                        <Cross className='modal-cross' onClick={closeHandle}/>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="modal-frame">
                        <img className="modal-img" src={`${BASE_URL}${pizza?.img}`} alt={pizza?.name} />
                        <div className="modal-inner-frame">
                            <div className="modal-upper-inner-frame">
                                <div className="modal-text">
                                    <h2 className="modal-title">{pizza?.name}</h2>
                                    <p className="modal-size-and-dough">size and dough</p>
                                    <p className="modal-description">{pizza?.description}</p>

                                </div>
                            </div>
                            <div className="modal-bottom-inner-frame"></div>
                            <button className='add-to-basket-button'>Добавить в корзину</button>
                        </div>
                    </div>
                    <div className="modal-scrollbar"></div>
                </div>
            </div>
        </div>
    )
}
export default InnerModal

    