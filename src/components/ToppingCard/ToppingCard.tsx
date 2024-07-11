import { BASE_URL } from "../../utils/constants/api"
import { PizzaIngridient } from "../../@types/pizzaTypes";
import styles from './ToppingCard.module.css'
import { useState } from "react";
import { translationIngridients } from "../../@types/enums";

interface ToppingCardProps {
    topping: PizzaIngridient;
    onChoose: (topping: PizzaIngridient) => void;
}

export const ToppingCard = ({ topping, onChoose }: ToppingCardProps) => {

    const [isSelected, setIsSelected] = useState<boolean>(false);

    const handleClick = () => {
        onChoose(topping);
        setIsSelected(!isSelected);
    }

    return (
        <div className= {isSelected ? styles.containerActive : styles.container} onClick={handleClick}>
            <img className={styles.img} src={`${BASE_URL}${topping.img}`} alt={"Картинка топпинга " + topping.name} />
            <div className={styles.content}>
                <h3 className={styles.name}>{translationIngridients[topping.name]}</h3>
                <p className={styles.price}>{topping.cost} ₽</p>
            </div>
        </div>
    )
}
