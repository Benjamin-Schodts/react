import React from 'react';

const Item = (props) => (
    <div className="basket-entry">
        <div className="basket-entry__profile">
            <picture className="basket-entry__profile__picture" data-amount={props.amount}>
                <img src={props.entry.imageUrl} className="basket-entry__profile__picture__image"></img>
            </picture>

            <div className="basket-entry__profile__name">
                <h3 className="basket-entry__profile__name__title">{props.entry.title}</h3>
                <span className="basket-entry__profile__name__subtitle">{props.entry.subtitle}</span>
            </div>
        </div>

        <div className="basket-entry__pricing basket-entry__pricing--simple">
            <span className="basket-entry__pricing__price">
                €&nbsp;{parseFloat(props.entry.price).toFixed(2)}
            </span>
        </div>
    </div>
);

export default Item;
