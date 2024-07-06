/// <reference types="vite-plugin-svgr/client" />
import {LogoIcon, ProfileIcon, OrdersIcon, LogOffIcon, BasketIcon} from '../../assets'
import './Header.css'

export const HeaderComponent = () => {
    return (
    <>
        <header className='header-container'>
            <div className="header">
            <div className="frame">
                <LogoIcon/>
                <div className='header2'>
                <ProfileIcon/>
                <OrdersIcon/>
                <div  className="gap"></div>
                <BasketIcon/>
                <LogOffIcon/>
                </div>
            </div>
            </div>
            
            <hr className='divider'></hr>
        </header>
    </>
    )
}