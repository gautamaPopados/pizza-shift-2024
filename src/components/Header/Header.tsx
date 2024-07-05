import './Header.css'

export const HeaderComponent = () => {
    return (
    <>
        <header className='header-container'>
            <div className="header">
            <div className="frame">
                <a className='logo'><img src='src\assets\logo.svg'></img></a>
                <div className='header2'>
                <a   className='profile'><img src ='src\assets\profile.svg'></img></a>
                <a   className='orders'><img src ='src\assets\orders.svg'></img></a>
                <div  className="gap"></div>
                <a   className='cart'><img src ='src\assets\basket.svg'></img></a>
                <a   className='logoff'><img src ='src\assets\logoff.svg'></img></a>
                </div>
            </div>
            </div>
            
            <hr className='divider'></hr>
        </header>
    </>
    )
}