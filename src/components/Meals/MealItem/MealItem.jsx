import React from "react";
import MealItemForm from "./MealItemForm";
import './MealItem.css';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    return <li className="meal-items">
        <div>
            <h3>{props.name}</h3>
            <div className="meal-description">{props.description}</div>
            <div className="meal-price">{price}</div>
        </div>
        <div>
            <MealItemForm />
        </div>
    </li>
};

export default MealItem;
