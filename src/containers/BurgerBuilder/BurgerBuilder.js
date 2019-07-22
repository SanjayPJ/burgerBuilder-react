import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'

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
    	}
    }

    render() {
        return (
            <div>
            	<Burger ingredients={this.state.ingredients}></Burger>
            	<div>Build Controls</div>
            </div>
        );
    }
}

export default BurgerBuilder;
