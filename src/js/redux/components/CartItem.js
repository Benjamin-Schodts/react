import React from 'react';

const getTotal = (amount, price) => parseFloat(amount * price).toFixed(2);

const CartItem = (props) => (
    <div className="cart-item">

        <picture className="cart-item__profile__picture">
            <img src={props.entry.imageUrl} className="cart-item__profile__picture__image"></img>
        </picture>

        <div className="cart-item__details">

            <div className="cart-item__profile">
                <div className="cart-item__profile__name">
                    <h3 className="cart-item__profile__name__title">{props.entry.title}</h3>
                    <span className="cart-item__profile__name__subtitle">{props.entry.subtitle}</span>
                </div>
            </div>

            <div className="cart-item__pricing">
                <div className="cart-item__pricing__first">
                    <span className="cart-item__pricing__price">
                        <span className="hidden-on-desktop">
                            Stukprijs:&nbsp;
                        </span>
                        €&nbsp;{parseFloat(props.entry.price).toFixed(2)}
                        <span className="hidden-on-mobile">
                            &nbsp;x
                        </span>
                    </span>

                    <div className="cart-item__pricing__controls">

                        <button
                            className="btn btn--primary btn--image cart-item__pricing__control__button"
                            id={props.id}
                            onClick={props.decreaseAmount}
                            disabled={parseInt(props.amount, 10) === 1}
                        >
                            <object type="image/svg+xml" data="./img/minus.svg"></object>
                        </button>

                        <button
                            className="btn btn--primary btn--image cart-item__pricing__control__button"
                            id={props.id}
                            onClick={props.increaseAmount}
                        >
                            <object type="image/svg+xml" data="./img/plus.svg"></object>
                        </button>

                        <input
                            type="number"
                            className="form-control form-control--small cart-item__pricing__control__input"
                            name="amount"
                            value={props.amount}
                            onChange={props.onChange}
                            id={props.id}
                            min="0"
                        ></input>

                        <button
                            className="btn btn--primary btn--image cart-item__pricing__control__button"
                            id={props.id}
                            onClick={props.removeEntry}
                        >
                            <object type="image/svg+xml" data="./img/delete.svg"></object>
                        </button>

                    </div>

                    <span className="cart-item__pricing__total">
                        <span className="hidden-on-desktop">
                            Totaal:&nbsp;
                        </span>
                        €&nbsp;{getTotal(props.amount, props.entry.price)}
                    </span>
                </div>

                <div className="cart-item__pricing__second">
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
            </div>
        </div>
    </div>
);

export default CartItem;
