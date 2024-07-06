import * as icons from '../../assets'
import styles from './Header.module.css'

export const Header = () => {
    return (
    <>
        <header className={styles.container}>
            <div className={styles.header}>
                <div className={styles.frame}>
                    <icons.LogoIcon/>
                    <div className={styles.inner}>
                        <div className={styles.item}>
                            <icons.UserIcon/>
                            <span className={styles.itemText}>Профиль</span>
                        </div>
                        <div className={styles.item}>
                            <icons.TimeIcon/>
                            <span className={styles.itemText}>Заказы</span>
                        </div>
                        <div  className={styles.gap}></div>
                        <div className={styles.item}>
                            <icons.BasketIcon/>
                            <span className={styles.itemText}>Корзина</span>
                        </div>
                        <div className={styles.item}>
                            <icons.ExitIcon/>
                            <span className={styles.itemText}>Выйти</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <hr className={styles.divider}></hr>
        </header>
    </>
    )
}