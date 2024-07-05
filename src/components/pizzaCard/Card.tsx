import { CardProps } from "../../constants/interfaces"
import { BaseUrl } from "../../constants/constants"
import './Card.css'

export const Card = ({ pizza, openModalComponent }: CardProps) => {
    return (
        <div className="card-container" key={pizza.id}>
            <img  className="pizza-img" src={`${BaseUrl}${pizza.img}`} alt={pizza.id.toString()} />
            <div className="pizza-content">
                <div className="pizza-text">
                    <h3 className="pizza-name">{pizza.name}</h3>
                    <span className="description">{pizza.description}</span>
                </div>
                <div className="pizza-frame">
                    <h3 className="price">{'От ' + pizza.sizes[0].price}</h3>
                    <button className="pizza-button" onClick={() => openModalComponent(pizza.id)}>Выбрать</button>
                </div>
            </div>
            
            
        </div>
    )
}