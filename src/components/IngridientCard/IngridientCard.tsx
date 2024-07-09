import Button from "../Input/button/Button";
import { BASE_URL } from "../../utils/constants/api"
import styles from './IngridientCard.module.css'
import { CardProps } from '../PizzaCard/PizzaCard'

export const IngridientCard = ({ pizza, onChoose, buttonChildren }: CardProps) => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={`${BASE_URL}${pizza.img}`} alt={"Картинка пиццы " + pizza.name} />
            <div className={styles.pizzaContent}>
                <div className={styles.text}>
                    <h3 className={styles.name}>{pizza.name}</h3>
                    <span className={styles.description}>{pizza.description}</span>
                </div>
                <div className={styles.frame}>
                    <h3 className={styles.price}>{'От ' + pizza.sizes[0].price}</h3>
                    <Button onClick={() => onChoose(pizza)} children={buttonChildren} width='298.67px' height='56px' />
                </div>
            </div>
        </div>
    )
}
