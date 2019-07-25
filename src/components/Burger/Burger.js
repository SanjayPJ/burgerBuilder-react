import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
    const ingredients = [];
    Object.entries(props.ingredients).map(ing => {
        for (let i = 0; i < ing[1]; i++) {
            ingredients.push(
                <BurgerIngredient key={ing[0] + i} type={ing[0]} />
            );
        }
    });
    if (ingredients.length === 0) {
        ingredients.push(
            <p
                key="0"
                className="text-center p-1 rounded"
                style={{ backgroundColor: "lightgrey" }}
            >
                <strong>Please start adding ingredients!</strong>
            </p>
        );
    }
    return (
        <div className="box">
            <BurgerIngredient type="bread-top" />
            {ingredients.map(ing => {
                return ing;
            })}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
