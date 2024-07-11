import { Pizza } from "../../@types/pizzaTypes";
import { BASE_URL } from "../../utils/constants/api"
import Button from "../Input/button/Button";
import styles from './PizzaCard.module.css'

interface CardProps {
    pizza: Pizza;
    onChoose: (pizza: Pizza) => void;
    buttonChildren: string;
}

const PizzaCard = ({ pizza, onChoose, buttonChildren }: CardProps) => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={`${BASE_URL}${pizza.img}`} alt={"Картинка пиццы " + pizza.name} />
            <div className={styles.pizzaContent}>
                <div className={styles.text}>
                    <h3 className={styles.name}>{pizza.name}</h3>
                    <span className={styles.description}>{pizza.description}</span>
                </div>
                <div className={styles.frame}>
                    <h3 className={styles.price}>{'От ' + pizza.sizes[0].price + ' ₽'}</h3>
                    <Button className={styles.button} onClick={() => onChoose(pizza)} children={buttonChildren}/>
                </div>
            </div>
        </div>
    )
}

export default PizzaCard;