import React from "react";

export default function Modal(props) {
    return (
        <div>
            <div>
                {/* Modal */}
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content b0">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
                                    Your Order
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    A delicious burger with the following
                                    ingredients.
                                </p>
                                <ul>
                                    <li>Salad: {props.ingredients.salad}</li>
                                    <li>Bacon: {props.ingredients.bacon}</li>
                                    <li>Cheese: {props.ingredients.cheese}</li>
                                    <li>Meat: {props.ingredients.meat}</li>
                                </ul>
                                <div>
                                    <strong>
                                        Total Price:
                                        {props.totalPrice.toFixed(2)}
                                    </strong>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary b0"
                                    onClick={props.purchaseCancelHandler}
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn b0"
                                    style={{ backgroundColor: "orange" }}
                                    onClick={props.purchaseContinueHandler}
                                >
                                    Continue to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
