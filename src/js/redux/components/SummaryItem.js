import React from 'react';

const SummaryItem = (props) => (
    <div className="cart-item">
        <picture className="cart-item__profile__picture" data-amount={props.amount}>
            <img src={props.entry.metadata.imageUrl} className="cart-item__profile__picture__image"></img>
        </picture>
        <div className="cart-item__profile">
            <div className="cart-item__profile__name">
                <h3 className="cart-item__profile__name__title">{props.entry.title}</h3>
                <span className="cart-item__profile__name__subtitle">{props.entry.metadata.description}</span>
            </div>
            <div className="cart-item__pricing cart-item__pricing--simple">
                <span className="cart-item__pricing__price">
                    €&nbsp;{parseFloat(props.entry.unitPrice).toFixed(2)}
                </span>
            </div>
        </div>
    </div>
);

export default SummaryItem;
