import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.6
};

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false
    };

    purchaseContinueHandler = () => {
        alert("you continue!!!");
    };

    purchaseCancelHandler = () => {
        alert("cancelling purchase");
    };

    updatePurchaseState = () => {
        const ingredients = {
            ...this.state.ingredients
        };
        let sum = 0;
        Object.keys(ingredients).forEach(function(key) {
            sum += parseInt(ingredients[key]);
        });
        this.setState({
            purchasable: sum > 0
        });
    };

    addIngredientHandler = type => {
        let { ingredients } = this.state;
        let { totalPrice } = this.state;
        ingredients[type] += 1;
        totalPrice += INGREDIENT_PRICES[type];
        this.setState({
            ingredients: ingredients,
            totalPrice: totalPrice
        });
        this.updatePurchaseState();
    };

    removeIngredientHandler = type => {
        let { ingredients } = this.state;
        let { totalPrice } = this.state;
        if (ingredients[type] > 0) {
            ingredients[type] -= 1;
            totalPrice -= INGREDIENT_PRICES[type];
            this.setState({
                ingredients: ingredients,
                totalPrice: totalPrice
            });
        }
        this.updatePurchaseState();
    };

    render() {
        let disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = !(disabledInfo[key] > 0);
        }
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredientHandler={this.addIngredientHandler}
                    removeIngredientHandler={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
                <Modal
                    ingredients={this.state.ingredients}
                    totalPrice={this.state.totalPrice}
                    purchaseCancelHandler={this.purchaseCancelHandler}
                    purchaseContinueHandler={this.purchaseContinueHandler}
                />
            </div>
        );
    }
}

export default BurgerBuilder;
