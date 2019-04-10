import React from 'react';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

import * as actionTypes from '../../constants/ActionTypes';
import CartItem from '../../components/CartItem';

function Cart(props) {
    const {t, i18n} = useTranslation('translation');

    const createCartItems = () => {
        const cart = props.itemsInCart.map((item) => {
            const product = props.products[item.id];
            return (<CartItem
                key={item.id}
                id={item.id}
                entry={product}
                amount={item.amount}
                onChange={props.updateAmount}
                increaseAmount={props.increaseAmount}
                decreaseAmount={props.decreaseAmount}
                removeEntry={props.removeFromCart}
            />);
        });

        return cart;
    };

    return (
        <div className="step step1">
            <div className="container">
                <button onClick={() => i18n.changeLanguage('nl')}>nl</button>
                <button onClick={() => i18n.changeLanguage('en')}>en</button>
                <h2>{t('title')}</h2>

                <div className="basket">
                    <div className="basket__entries">
                        {createCartItems()}
                    </div>

                    <aside className="basket-sidebar">
                        <div className="basket__checkout">

                            {/* Reduction Amount */}
                            {props.reduction ? (
                                <div className="basket__checkout__reduction">
                                    <span className="basket__checkout__reduction__name">
                                        {props.reduction.name}
                                    </span>

                                    <span className="basket__checkout__reduction__amount">
                                        {t('minus_currency')}{parseFloat(props.reduction.amount).toFixed(2)}
                                    </span>
                                </div>
                            ) : ''}

                            <div className="basket__checkout__subTotal">
                                <span>{t('subtotal_excl')}</span>
                                €&nbsp;{parseFloat(props.total).toFixed(2)}
                            </div>
                            <div className="basket__checkout__vatTotal">
                                <span>{t('vat')}</span> 21%
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
                                    {t('apply')}
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

                        <div className="basket__travelexpenses">
                            <span>{t('delivery_cost')}</span> €&nbsp;{parseFloat(props.deliveryCost).toFixed(2)}
                        </div>

                        <div className="basket__total">
                            <span>{t('subtotal_incl')}</span> €&nbsp;{parseFloat(props.total).toFixed(2)}
                        </div>

                        <Link
                            to={'/delivery-method'}
                            className="btn btn--primary basket__submit"
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
