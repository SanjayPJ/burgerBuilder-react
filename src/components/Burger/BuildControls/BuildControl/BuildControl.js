import React from "react";

export default function buildControl(props) {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button
                className="Less"
                disabled={props.disabledInfo}
                onClick={props.removeIngredientHandler}
            >
                Less
            </button>
            <button className="More" onClick={props.addIngredientHandler}>
                More
            </button>
        </div>
    );
}
