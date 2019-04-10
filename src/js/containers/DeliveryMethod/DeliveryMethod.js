import React from 'react';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

import SummaryItem from '../../components/SummaryItem';

function DeliveryMethod(props) {
    const {t} = useTranslation('translation');

    const renderSummary = () => {
        const items = props.itemsInCart.map((item) => {
            const product = props.products[item.id];
            return (<SummaryItem
                key={item.id}
                entry={product}
                amount={item.amount}
            />);
        });

        return items;
    };

    return (
        <div className="step delivery-method">
            <div className="container">
                <div className="splitview">
                    <div className="splitview__first">
                        <div className="chosen-method">
                            <span className="chosen-method__title">

                            </span>
                        </div>
                        <h2>{t('delivery_method_title')}</h2>
                    </div>
                    <div className="splitview__second">
                        <div className="basket-summary__title">
                            {t('cart_summary_title')}
                            <Link
                                to={'/'}
                            >
                                {t('modify')}
                            </Link>
                        </div>
                        <div className="basket-summary">
                            {renderSummary()}
                        </div>
                    </div>
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

export default connect(mapStateToProps)(DeliveryMethod);
