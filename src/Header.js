import React from "react";

const MainText = (props)=>{

    return (
        <span className="header__text">hello world</span>
    )

}

const Menu = (props)=>{

    return (
        <nav>
            <ul className="header__menu-list">
                <li><a href="#">Проекты</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Услуги</a></li>
            </ul>

        </nav>
    )

}



const Header = (props)=>{

    


    return (
        <header className="header" >
            <div className="header__container">
                <div className="header__logo">
                    <img src="img/logo.jpg" alt="logo image"/>
                </div>
                <MainText/>
                <Menu/>

            </div>
        </header>

    )

}

export default Header;