import React from 'react';

const SummaryItem = (props) => (
    <div className="cart-item">
        <div className="cart-item__profile">
            <picture className="cart-item__profile__picture" data-amount={props.amount}>
                <img src={props.entry.imageUrl} className="cart-item__profile__picture__image"></img>
            </picture>

            <div className="cart-item__profile__name">
                <h3 className="cart-item__profile__name__title">{props.entry.title}</h3>
                <span className="cart-item__profile__name__subtitle">{props.entry.subtitle}</span>
            </div>
        </div>

        <div className="cart-item__pricing cart-item__pricing--simple">
            <span className="cart-item__pricing__price">
                €&nbsp;{parseFloat(props.entry.price).toFixed(2)}
            </span>
        </div>
    </div>
);

export default SummaryItem;
