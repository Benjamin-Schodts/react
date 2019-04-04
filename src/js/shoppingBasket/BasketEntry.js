// Javascript Imports
import React from 'react';

const BasketEntry = (props) => (
    <div className="basket-entry">

        <div className="basket-entry__profile">
            <picture className="basket-entry__profile__picture">
                <img src={props.entry.imageUrl} className="basket-entry__profile__picture__image"></img>
            </picture>

            <div className="basket-entry__profile__name">
                <h3 className="basket-entry__profile__name__title">{props.entry.title}</h3>
                <span className="basket-entry__profile__name__subtitle">{props.entry.subtitle}</span>
            </div>
        </div>

        <div className="basket-entry__pricing">
            <div className="basket-entry__pricing__first">
                <div className="basket-entry__pricing__first__top">
                    <span className="basket-entry__pricing__price">
                        €&nbsp;{parseFloat(props.entry.price).toFixed(2)}&nbsp;x
                    </span>

                    <div className="basket-entry__pricing__controls">

                        <button
                            className="btn btn--primary btn--image basket-entry__pricing__control__button"
                            id={props.id}
                            onClick={props.decreaseAmount}
                        >
                            <object type="image/svg+xml" data="./img/minus.svg"></object>
                        </button>

                        <button
                            className="btn btn--primary btn--image basket-entry__pricing__control__button"
                            id={props.id}
                            onClick={props.increaseAmount}
                        >
                            <object type="image/svg+xml" data="./img/plus.svg"></object>
                        </button>

                        <input
                            type="number"
                            className="form-control form-control--small basket-entry__pricing__control__input"
                            name="amount"
                            value={props.amount}
                            onChange={props.onChange}
                            id={props.id}
                            min="0"
                        ></input>

                        <button
                            className="btn btn--primary btn--image basket-entry__pricing__control__button"
                            id={props.id}
                            onClick={props.removeEntry}
                        >
                            <object type="image/svg+xml" data="./img/delete.svg"></object>
                        </button>

                    </div>
                </div>
                {props.entry.promo
                    ? (
                        <div className="promo promo--red">
                            <div className="promo__code">
                                {props.entry.promo.title}
                            </div>
                            {props.entry.promo.condition - props.amount > 0
                                ? (
                                    <div className="promo__description text--red">
                                        <span className="promo__description__text--bold">
                                            Bestel nog {props.entry.promo.condition - props.amount} flessen
                                        </span> voor onze 5plus1
                                    </div>
                                ) : ''}
                        </div>
                    ) : ''
                }

            </div>

            <div className="basket-entry__pricing__second">

                <span className="basket-entry__pricing__total">
                    €&nbsp;{getTotal(props.amount, props.entry.price)}
                </span>
            </div>
        </div>
    </div>
);

/**
 * @param  {Number} amount
 * @param  {Number} price
 */
function getTotal(amount, price) {
    return parseFloat(amount * price).toFixed(2);
}

export default BasketEntry;
