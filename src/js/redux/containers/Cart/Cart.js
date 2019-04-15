import React from 'react';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

import * as actionTypes from '../../constants/ActionTypes';
import CartItem from '../../components/CartItem';

function Cart(props) {
    const {t, i18n} = useTranslation('translation');

    const createCartItems = () => {
        const cart = props.itemsInCart.map((item) => (
            <CartItem
                key={item.index}
                orderLineIndex={item.index}
                orderIndex={props.cart.order.index}
                entry={item}
                amount={item.quantity}
                onChange={props.updateAmount}
                increaseAmount={props.increaseAmount}
                decreaseAmount={props.decreaseAmount}
                removeEntry={props.removeFromCart}
            />));

        return cart;
    };

    return (
        <div className="step step1">
            <div className="container">
                <button onClick={() => i18n.changeLanguage('nl')}>nl</button>
                <button onClick={() => i18n.changeLanguage('en')}>en</button>
                <h2>{t('title')}</h2>

                <div className="cart">
                    <div className="cart__entries">
                        {createCartItems()}
                    </div>

                    <aside className="cart-sidebar">
                        <div className="cart__checkout">

                            {/* Reduction Amount */}
                            <div className="cart__checkout__reduction">
                                <span className="cart__checkout__reduction__name">
                                    Korting:
                                </span>

                                <span className="cart__checkout__reduction__amount">
                                    {t('minus_currency')}{parseFloat(props.cart.totalDiscount).toFixed(2)}
                                </span>
                            </div>

                            <div className="cart__checkout__subTotal">
                                <span>{t('subtotal_excl')}</span>
                                €&nbsp;{parseFloat(props.cart.costExclShipping).toFixed(2)}
                            </div>
                            <div className="cart__checkout__vatTotal">
                                <span>{t('vat')}</span> {props.cart.vatExclShipping}
                            </div>
                        </div>

                        <div className="reduction">
                            <div className="flash-message flash-message--full">
                                {t('reduction')}(ENDOFSUM2017 -€10,00)
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
                                    placeholder={t('promo_code')}
                                />

                                <button className="btn btn--primary reduction__input-container__button">
                                    <span className="hidden-on-desktop">
                                        +
                                    </span>
                                    <span className="hidden-on-mobile">
                                        {t('apply')}
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="delivery">
                            <h3 className="delivery__title">{t('order_delivery')}</h3>
                            <div className="radio">
                                <input
                                    type="radio"
                                    name="delivery"
                                    value="pickup"
                                    id="deliver1"
                                    onChange={props.updateDeliveryMethod}
                                    checked={props.deliveryMethod === 'pickup'}
                                    data-cost='0'
                                />
                                <label htmlFor="deliver1" className="radio__label">
                                    {t('pickup')}

                                    <span className="radio__label__subtext">
                                        {t('pickup_on', {day: 18, month: 'januari', year: 2019})}
                                    </span>

                                    <Link
                                        to={'/delivery-method'}
                                        className="radio__label__link"
                                    >
                                        {t('change_day')}
                                    </Link>
                                </label>
                            </div>

                            <div className="radio">
                                <input
                                    type="radio"
                                    name="delivery"
                                    value="deliver"
                                    id="deliver2"
                                    onChange={props.updateDeliveryMethod}
                                    checked={props.deliveryMethod === 'deliver'}
                                    data-cost='9.95'
                                />
                                <label htmlFor="deliver2" className="radio__label">
                                    {t('delivery_standard')}

                                    <span className="radio__label__subtext">
                                        {t('delivery_on')}
                                    </span>

                                    <Link
                                        to={'/delivery-method'}
                                        className="radio__label__link"
                                    >
                                        {t('update_delivery_moment')}
                                    </Link>
                                </label>
                            </div>

                            <p className="delivery__message text--red">
                                {t('promo_message')}
                            </p>
                        </div>

                        <div className="cart__travelexpenses">
                            <span>{t('delivery_cost')}</span> €&nbsp;{parseFloat(props.cart.shippingCost).toFixed(2)}
                        </div>

                        <div className="cart__total">
                            <span>{t('subtotal_incl')}</span> €&nbsp;{parseFloat(props.cart.totalCost).toFixed(2)}
                        </div>

                        <Link
                            to={'/delivery-method'}
                            className="btn btn--primary cart__submit"
                        >
                            {t('to_checkout')}
                        </Link>
                    </aside>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => (
    {
        itemsInCart: state.cart.cart.orderLines,
        cart: state.cart.cart,
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
            orderLineIndex: event.target.id,
            orderIndex: event.target.dataset.orderindex
        }),
        increaseAmount: (event) => dispatch({
            type: actionTypes.ADD_TO_CART,
            orderLineIndex: event.target.id,
            orderIndex: event.target.dataset.orderindex
        }),
        decreaseAmount: (event) => dispatch({
            type: actionTypes.REMOVE_FROM_CART,
            orderLineIndex: event.target.id,
            orderIndex: event.target.dataset.orderindex
        }),
        removeFromCart: (event) => dispatch({
            type: actionTypes.DELETE_FROM_CART,
            orderLineIndex: event.target.id,
            orderIndex: event.target.dataset.orderindex
        }),
        updateDeliveryMethod: (event) => dispatch({
            type: actionTypes.UPDATE_DELIVERY_METHOD,
            method: event.target.value
        })
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
