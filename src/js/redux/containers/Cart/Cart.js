import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actionTypes from '../../constants/ActionTypes';

import BasketEntry from '../../../shoppingBasket/BasketEntry';


class Cart extends Component {
    render() {
        return (
            <div className="step step1">
                <div className="container">
                    <h2>Uw Winkelmandje</h2>

                    <div className="basket">
                        <div className="basket__entries">
                            {this.createCartItems()}
                        </div>

                        <aside className="basket-sidebar">
                            <div className="basket__checkout">

                                {/* Reduction Amount */}
                                {this.props.reduction ? (
                                    <div className="basket__checkout__reduction">
                                        <span className="basket__checkout__reduction__name">
                                            {this.props.reduction.name}
                                        </span>

                                        <span className="basket__checkout__reduction__amount">
                                            - €&nbsp;{parseFloat(this.props.reduction.amount).toFixed(2)}
                                        </span>
                                    </div>
                                ) : ''}

                                <div className="basket__checkout__subTotal">
                                    <span>Subtotaal (excl. BTW):</span>
                                    €&nbsp;{parseFloat(this.props.total).toFixed(2)}
                                </div>
                                <div className="basket__checkout__vatTotal">
                                    <span>BTW:</span> 21%
                                </div>
                            </div>

                            <div className="reduction">
                                <div className="flash-message flash-message--full">
                                    Korting: (ENDOFSUM2017 -€10,00)
                                    <object
                                        type="image/svg+xml"
                                        data="./img/close.svg"
                                        className="flash-message__close">
                                    </object>
                                </div>

                                <div className="reduction__input-container">
                                    <input
                                        type="text"
                                        name="input"
                                        id="input"
                                        className="form-control reduction__input-container__input"
                                        placeholder="Kortingscode"
                                    />

                                    <button className="btn btn--primary reduction__input-container__button">
                                        Pas toe
                                    </button>
                                </div>
                            </div>

                            <div className="delivery">
                                <h3 className="delivery__title">Bezorging & Ophalen</h3>
                                <div className="radio">
                                    <input
                                        type="radio"
                                        name="delivery"
                                        value="pickup"
                                        id="deliver1"
                                        onChange={this.props.updateDeliveryMethod}
                                        checked={this.props.deliveryMethod === 'pickup'}
                                    />
                                    <label htmlFor="deliver1" className="radio__label">
                                        Ophalen bij ons

                                        <span className="radio__label__subtext">
                                            Afhalen op vrijdag 17 januari 2019
                                        </span>

                                        <a
                                            href="#"
                                            className="radio__label__link"
                                            onClick={this.toDeliveryMethod}
                                        >
                                            Wijzig dag
                                        </a>
                                    </label>
                                </div>

                                <div className="radio">
                                    <input
                                        type="radio"
                                        name="delivery"
                                        value="deliver"
                                        id="deliver2"
                                        onChange={this.props.updateDeliveryMethod}
                                        checked={this.props.deliveryMethod === 'deliver'}
                                    />
                                    <label htmlFor="deliver2" className="radio__label">
                                        Standaard verzending (€9,95)

                                        <span className="radio__label__subtext">
                                            Morgen in huis tussen 09:00 en 17:00 uur
                                        </span>

                                        <a
                                            href="#"
                                            onClick={this.toDeliveryMethod}
                                            className="radio__label__link"
                                        >
                                            Wijzig bezorgmoment
                                        </a>
                                    </label>
                                </div>

                                <p className="delivery__message text--red">
                                    Bestel nog voor €45,05 extra aan artikelen en je bestelling wordt gratis verzonden
                                </p>
                            </div>

                            <div className="basket__travelexpenses">
                                <span>Verzendkosten:</span> €&nbsp;{parseFloat(this.props.deliveryCost).toFixed(2)}
                            </div>

                            <div className="basket__total">
                                <span>Subtotaal:</span> €&nbsp;{parseFloat(this.props.total).toFixed(2)}
                            </div>

                            <button
                                className="btn btn--primary basket__submit"
                                onClick={this.toDeliveryMethod}
                            >
                                Naar de kassa
                            </button>
                        </aside>
                    </div>
                </div>
            </div>
        );
    }

    createCartItems = () => {
        const cart = this.props.itemsInCart.map((item) => {
            const product = this.props.products[item.id];

            return (<BasketEntry
                key={item.id}
                id={item.id}
                entry={product}
                amount={item.amount}
                onChange={this.props.updateAmount}
                increaseAmount={this.props.increaseAmount}
                decreaseAmount={this.props.decreaseAmount}
                removeEntry={this.props.removeFromCart}
            />);
        });

        return cart;
    }

    toDeliveryMethod = () => {
        this.props.history.push('/delivery-method');
    }
}

const mapStateToProps = (state) => (
    {
        itemsInCart: state.cart.addedItems,
        products: state.products.products,
        reduction: state.cart.reduction,
        total: state.cart.total,
        deliveryMethod: state.cart.delivery.method,
        deliveryCost: state.cart.delivery.cost
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        updateAmount: (event) => dispatch({
            type: actionTypes.UPDATE_AMOUNT_IN_CART,
            payload: event.target.value,
            productId: event.target.id
        }),
        increaseAmount: (event) => dispatch({
            type: actionTypes.ADD_TO_CART,
            productId: event.target.id
        }),
        decreaseAmount: (event) => dispatch({
            type: actionTypes.REMOVE_FROM_CART,
            productId: event.target.id
        }),
        removeFromCart: (event) => dispatch({
            type: actionTypes.REMOVE_FROM_CART,
            delete: true,
            productId: event.target.id
        }),
        updateDeliveryMethod: (event) => dispatch({
            type: actionTypes.UPDATE_DELIVERY_METHOD,
            method: event.target.value
        })
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
