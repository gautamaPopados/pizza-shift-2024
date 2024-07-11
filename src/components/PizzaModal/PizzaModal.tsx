import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CrossIcon } from '../../assets';
import { BASE_URL } from '../../utils/constants/api';
import Button from '../Input/button/Button';
import styles from './PizzaModal.module.css';
import { ToppingCard } from '../ToppingCard/ToppingCard';
import { Pizza, PizzaIngridient } from '../../@types/pizzaTypes';
import { translationSizes } from '../../@types/enums';

const mountElement = document.body;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    pizza: Pizza;
}

const PizzaModal = ({ isOpen, onClose, pizza }: ModalProps) => {

    if (!isOpen) return null;

    const [isVisible, setIsVisible] = useState(false)

    const [size, setSize] = useState<string>('SMALL');
    const [toppings, setToppings] = useState<PizzaIngridient[]>([]);

    const closeHandle = () => {
        setIsVisible(false)

        setTimeout(() => {
            onClose();
        }, 300)
    }

    useEffect(() => {
        setIsVisible(true)
    }, [isOpen])

    const handleToppingClick = (topping: PizzaIngridient) => {
        if (toppings.includes(topping)) {
            setToppings(toppings.filter((t) => t !== topping));
        } else {
            setToppings([...toppings, topping]);
        }
    };

    return (
        createPortal(
            <div className={isVisible ? `${styles.wrapper} ${styles.active}` : styles.wrapper} >

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
                                <div className={styles.secondInnerFrame}>
                                    <div className={styles.upperInnerFrame}>
                                        <div className={styles.text}>
                                            <h2 className={styles.title}>{pizza?.name}</h2>
                                            <p className={styles.sizeAndDough}>{`${translationSizes[size]}, Традиционное тесто.`}</p>
                                            <p className={styles.ingridients}>{pizza?.description}</p>

                                        </div>
                                        <div className={styles.tabs}>
                                            <ul className={styles.list}>
                                                <li
                                                    className={size === 'SMALL' ? styles.activeTabs : styles.tab}
                                                    button-tabs="true"
                                                    onClick={() => setSize('SMALL')}
                                                >
                                                    Маленькая
                                                </li>
                                                <li
                                                    className={size === 'MEDIUM' ? styles.activeTabs : styles.tab}
                                                    button-tabs="true"
                                                    onClick={() => setSize('MEDIUM')}
                                                >
                                                    Средняя
                                                </li>
                                                <li
                                                    className={size === 'LARGE' ? styles.activeTabs : styles.tab}
                                                    button-tabs="true"
                                                    onClick={() => setSize('LARGE')}
                                                >
                                                    Большая
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={styles.bottomInnerFrame}>
                                        <div className={styles.bottomTextFrame}>Добавить по вкусу</div>
                                        <div className={styles.toppings}>
                                            {pizza.toppings.length > 0 &&
                                                pizza.toppings.map((topping) => <ToppingCard key={topping.name} topping={topping} onChoose={handleToppingClick} />)
                                            }
                                        </div>
                                    </div>
                                </div>
                                <Button children="Добавить в корзину" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            , mountElement)
    )
}

export default PizzaModal;