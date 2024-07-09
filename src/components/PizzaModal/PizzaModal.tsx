import { SyntheticEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CrossIcon } from '../../assets';
import { BASE_URL } from '../../utils/constants/api';
import Button from '../Input/button/Button';
import styles from './PizzaModal.module.css';
import Tabs from '../Input/Tabs/Tabs';
import { Sizes } from '../../@types/enums';

const mountElement = document.body;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    pizza?: Pizza;
}

const PizzaModal = ({ isOpen, onClose, pizza }: ModalProps) => {
    
    if (!isOpen) return null;

    const [isVisible, setIsVisible] = useState(false)

    const [size, setSize] = useState<string>('');
    const [toppings, setToppings] = useState<string[]>([]);

    const handleSizeChange = (event: SyntheticEvent, newValue: string) => {
        setSize(newValue);
    }


    const closeHandle = () => {
        setIsVisible(false)

        setTimeout(() => {
            onClose();
        }, 300)
    }

    useEffect(() => {
        setIsVisible(true)
    }, [isOpen])

    return (
        createPortal(
            <div className={isVisible ? `${styles.wrapper} ${styles.active}` : styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.line}>
                            <CrossIcon className={styles.cross} onClick={closeHandle} />
                        </div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.frame}>
                            <img className={styles.img} src={`${BASE_URL}${pizza?.img}`} alt={pizza?.name} />
                            <div className={styles.innerFrame}>
                                <div className={styles.upperInnerFrame}>
                                    <div className={styles.text}>
                                        <h2 className={styles.title}>{pizza?.name}</h2>
                                        <p className={styles.sizeAndDough}>size and dough</p>
                                        <p className={styles.ingridients}>{pizza?.description}</p>

                                    </div>
                                </div>
                                <div className={styles.bottomInnerFrame}></div>
                                <Button children="Добавить в корзину" />
                            </div>
                        </div>
                        <div className={styles.scrollbar}></div>
                    </div>
                </div>
            </div>
            , mountElement)
    )
}

export default PizzaModal;