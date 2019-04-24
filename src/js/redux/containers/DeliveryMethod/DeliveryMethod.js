import React from 'react';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
// import CustomSelect from 'vanilla-js-dropdown';

import SummaryItem from '../../components/SummaryItem';
import Radio from '../../components/Radio';

import getHeight from '../../../utils/elementHeight';


function DeliveryMethod(props) {
    const {t} = useTranslation('translation');

    const renderSummary = () => {
        const items = props.itemsInCart.map((item) => (
            <SummaryItem
                key={item.index}
                entry={item}
                amount={item.quantity}
            />
        ));

        return items;
    };

    const renderDefaultDeliveryMomentOptions = () => {
        const optionsDefault = props.deliveryOptions.default.map((item) => (
            <Radio
                key={`deliverytime${item.from}${item.to}`}
                name="deliverytime"
                id={`deliverytime${item.from}${item.to}`}
                value={`${item.from}-${item.to}`}
                label={t('radio_time', {from: item.from, to: item.to, extra: null})}
            ></Radio>
        ));

        return optionsDefault;
    };

    const renderExtraDeliveryMomentOptions = () => {
        const optionsExtra = props.deliveryOptions.extra.map((item) => (
            <Radio
                key={`deliverytimeExtra${item.from}${item.to}`}
                name="deliverytime"
                id={`deliverytimeExtra${item.from}${item.to}`}
                value={`${item.from}-${item.to}extra`}
                label={t('radio_time', {from: item.from, to: item.to, extra: item.extra})}
            ></Radio>
        ));

        return optionsExtra;
    };

    const toggleAccordion = (el) => {
        const cartSummary = el.currentTarget.parentElement.parentElement;
        const items = cartSummary.querySelector('.cart-summary__items');

        if (cartSummary.classList.contains('collapsed')) {
            items.style.maxHeight = `${getHeight(items)}px`;
        } else {
            items.style.maxHeight = 0;
        }

        cartSummary.classList.toggle('collapsed');
        cartSummary.querySelector('.cart-summary__accordion-trigger__link--show').classList.toggle('hidden');
        cartSummary.querySelector('.cart-summary__accordion-trigger__link--hide').classList.toggle('hidden');
    };

    return (
        <div className="step delivery-method">
            <div className="container">
                <div className="splitview">
                    <div className="splitview__first">
                        <div className="chosen-method">
                            <span className="chosen-method__first">
                                <h4 className="chosen-method__title">
                                    Verzendsmethode
                                </h4>
                            </span>
                            <div className="chosen-method__second">
                                <h4 className="chosen-method__title">
                                    Standaard verzending
                                </h4>
                                <div className="chosen-method__description">
                                    Morgen (donderdag 19 februari) in huis tussen 09.00 en 17.00 uur (€9,95)
                                    <Link
                                        to={'/'}
                                        className="chosen-method__description__link"
                                    >
                                        {t('modify')}
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <h2>{t('delivery_method_title')}</h2>
                        Kies het moment dat jou uitkomt
                        <select id="select">
                            <option>nu</option>
                            <option>later</option>
                        </select>

                        {renderDefaultDeliveryMomentOptions()}

                        {renderExtraDeliveryMomentOptions()}

                        <Link
                            to={'/'}
                        >
                            Terug naar uw gegevens
                        </Link>

                        <Link
                            to={'/'}
                            className="btn btn--primary cart__submit"
                        >
                            {t('to_checkout')}
                        </Link>
                    </div>
                    <div className="splitview__second">
                        <div className="cart-summary collapsed">
                            <div className="cart-summary__accordion-trigger">
                                <a
                                    href="#"
                                    onClick={toggleAccordion}
                                    className="cart-summary__accordion-trigger__link"
                                >
                                    <span className="cart-summary__accordion-trigger__link--show">
                                        {t('show_content')}
                                    </span>
                                    <span className="cart-summary__accordion-trigger__link--hide hidden">
                                        {t('hide_content')}
                                    </span>
                                </a>
                                <span className="cart-summary__accordion-trigger__total">€ {props.cart.totalCost}</span>
                            </div>
                            <div className="cart-summary__items">
                                <div className="">
                                    {t('cart_summary_title')}
                                    <Link
                                        to={'/'}
                                    >
                                        {t('modify')}
                                    </Link>
                                </div>
                                {renderSummary()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// function initSelects() {
//     new CustomSelect({
//         elem: 'select'
//     });
// }

// function renderSelects() {
//     return (<select id="select">
//         <option>nu</option>
//         <option>later</option>
//     </select>);
// }

const mapStateToProps = (state) => (
    {
        itemsInCart: state.cart.cart.orderLines,
        cart: state.cart.cart,
        products: state.products.products,
        reduction: state.cart.reduction,
        total: state.cart.total,
        deliveryMethod: state.cart.delivery.method,
        deliveryCost: state.cart.delivery.cost,
        deliveryOptions: state.cart.delivery.options
    }
);

export default connect(mapStateToProps)(DeliveryMethod);
