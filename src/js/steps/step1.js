import React, {Component} from 'react';
import {fetch, push} from '../utils/remoteState';

import BasketEntry from '../shoppingBasket/BasketEntry';

class Step1 extends Component {
    constructor() {
        super();
        this.state = fetch();
        this.state.title = 'Uw Winkelmandje - Step 1';
    }

    render() {
        return (
            <div className="step step1">
                <h2>{this.state.title}</h2>

                <div className="basket">
                    <div className="basket__entries">
                        {this.createBasketEntries()}
                    </div>

                    <aside className="basket-sidebar">
                        <div className="basket__checkout">
                            {this.createReductionAmountOutput()}
                            <div className="basket__checkout__subTotal">
                                <span>Subtotaal (excl. BTW):</span>
                                €&nbsp;{parseFloat(this.getSubTotal()).toFixed(2)}
                            </div>
                            <div className="basket__checkout__vatTotal">
                                <span>BTW:</span> €&nbsp;{parseFloat(this.getVATTotal()).toFixed(2)}
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
                            <input
                                type="radio"
                                name="delivery"
                                value="pickup"
                            /> Ophalen bij ons<br />
                            <input
                                type="radio"
                                name="delivery"
                                value="standard"
                            /> Standaard verzending (€9,95)<br />
                            <p className="delivery__message text--red">
                                Bestel nog voor €45,05 extra aan artikelen en je bestelling wordt gratis verzonden
                            </p>
                        </div>

                        <div className="basket__travelexpenses">
                            <span>Verzendkosten:</span> €&nbsp;{parseFloat(this.getTotal()).toFixed(2)}
                        </div>

                        <div className="basket__total">
                            <span>Subtotaal:</span> €&nbsp;{parseFloat(this.getTotal()).toFixed(2)}
                        </div>

                        <button
                            className="btn btn--primary basket__submit"
                            onClick={this.nextStep}
                        >
                            Naar de kassa
                        </button>
                    </aside>
                </div>

            </div>
        );
    }

    nextStep = () => {
        push(this.state);
        this.props.history.push('/step2');
    }

    /**
     * @param  {Event} event
     */
    amountInputChangeHandler = (event) => {
        const targetEntry = event.target;

        this.updateAmount(targetEntry.id, targetEntry.value);
    }

    /**
     * @param  {Event} event
     */
    increaseAmount = (event) => {
        const targetEntry = event.target;

        this.updateAmount(targetEntry.id, this.state.entries[targetEntry.id] + 1);
    }

    /**
     * @param  {Event} event
     */
    decreaseAmount = (event) => {
        const targetEntry = event.target;

        if (this.state.entries[targetEntry.id] > 1) {
            this.updateAmount(targetEntry.id, this.state.entries[targetEntry.id] - 1);
        }
    }

    /**
     * @param  {Number} id
     * @param  {Number} value
     */
    updateAmount = (id, value) => {
        this.setState((prevState) => ({
            entries: {
                ...prevState.entries,
                [id]: parseInt(value, 10)
            }
        }));
    }

    /**
     * @param  {Event} event
     */
    removeEntry = (event) => {
        const targetEntry = event.target;

        const newEntries = {...this.state.entries};
        delete newEntries[targetEntry.id];

        this.setState(() => ({
            entries: newEntries
        }));
    }

    getSubTotal = () => {
        let subTotal = 0;

        Object.entries(this.state.entries).forEach((entry) => {
            const [id, amount] = entry;

            subTotal += (this.getItem(id).price * amount);
        });

        return subTotal;
    }

    getVATTotal= () => {
        let vatTotal = 0;

        Object.entries(this.state.entries).forEach((entry) => {
            const [id, amount] = entry;

            vatTotal += (this.getItem(id).price * (this.getItem(id).vat / 100)) * amount;
        });

        return vatTotal;
    }

    getTotal = () => this.getSubTotal() + this.getVATTotal() - this.getReduction();

    getReduction = () => {
        let reduction = 0;

        if (this.state.reduction) {
            if (this.state.reduction.percentage) {
                reduction = this.getSubTotal() * (this.state.reduction.amount / 100);
            } else {
                reduction = this.state.reduction.amount;
            }
        }

        return reduction;
    }

    createBasketEntries = () => {
        const basket = [];

        Object.entries(this.state.entries).forEach((entry) => {
            const [id, amount] = entry;
            const item = this.getItem(id);

            basket.push(
                <BasketEntry
                    key={id}
                    id={id}
                    entry={item}
                    amount={amount}
                    onChange={this.amountInputChangeHandler}
                    increaseAmount={this.increaseAmount}
                    decreaseAmount={this.decreaseAmount}
                    removeEntry={this.removeEntry}
                />
            );
        });

        return basket;
    }

    createReductionAmountOutput = () => {
        if (this.state.reduction) {
            return (
                <div className="basket__checkout__reduction">
                    <span className="basket__checkout__reduction__name">
                        {this.state.reduction.name}
                    </span>

                    <span className="basket__checkout__reduction__amount">
                        - €&nbsp;{parseFloat(this.getReduction()).toFixed(2)}
                    </span>
                </div>
            );
        }

        return null;
    }

    createReductionFlashOutput = () => {
        if (this.state.reduction) {
            return (
                <div className="basket__checkout__reduction__flash">
                    Korting: ({this.state.reduction.name}
                    {this.state.reduction.percentage
                        ? (`${this.state.reduction.amount}%`)
                        : (`- € ${this.state.reduction.amount}`)
                    }
                    )
                </div>
            );
        }

        return null;
    }

    getItem = (id) => this.state.allItems[id];
}

export default Step1;
