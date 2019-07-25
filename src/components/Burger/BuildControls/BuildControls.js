import React from "react";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {
        label: "Salad",
        type: "salad"
    },
    {
        label: "Bacon",
        type: "bacon"
    },
    {
        label: "Cheese",
        type: "cheese"
    },
    {
        label: "Meat",
        type: "meat"
    }
];

export default function buildControls(props) {
    return (
        <div className="BuildControls">
            <p>
                Current Price : <strong>{props.totalPrice.toFixed(2)}</strong>
            </p>
            {controls.map(ctrl => {
                return (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        addIngredientHandler={props.addIngredientHandler.bind(
                            this,
                            ctrl.type
                        )}
                        removeIngredientHandler={props.removeIngredientHandler.bind(
                            this,
                            ctrl.type
                        )}
                        disabledInfo={props.disabledInfo[ctrl.type]}
                    />
                );
            })}
            <button
                type="button"
                disabled={!props.purchasable}
                className="OrderButton"
                style={{ marginTop: "20px" }}
                data-toggle="modal"
                data-target="#exampleModal"
            >
                ORDER NOW
            </button>
        </div>
    );
}
