import React from "react";
import './Header.css';
import mealsImage from '../../assets/mealimage.png'
import HeaderCart from "./HeaderCart";

const Header = (props) => {
    return <React.Fragment>
        <header className="header">
            <h1>Bhojann</h1>
            <HeaderCart onClick={props.onShowCart}/>
        </header>
        <div className="main-image">
            <img src={mealsImage} alt="Delicious foods!" />
        </div>
    </React.Fragment>
}

export default Header;