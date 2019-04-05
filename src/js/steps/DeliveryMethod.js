import React, {Component} from 'react';
import {fetch, push} from '../utils/remoteState';
import Item from '../shoppingBasket/Item';

class DeliveryMethod extends Component {
    constructor(props) {
        super();
        this.state = fetch();
        this.state.lastRoute = props.location.pathname;
        this.state.title = 'Bezorgmoment kiezen';
        push(this.state);
    }

    render() {
        return (
            <div className="step delivery-method">
                <div className="container">
                    <div className="splitview">
                        <div className="splitview__first">
                            <div className="chosen-method">
                                <span className="chosen-method__first">
                                    verzendsmethode
                                </span>
                                <div className="chosen-method__second">
                                    Standaard verzending <a href="#" onClick={this.backToOverview}>Wijzigen</a>
                                    <br/>
                                    Morgen (donderdag 19 februari) in huis tussen 09.00 en 17.00 uur (€9,95)
                                </div>
                            </div>

                            <hr/>

                            <h2>{this.state.title}</h2>
                            Kies het moment dat jou uitkomt
                            <select>
                                <option>NU</option>
                                <option>Later</option>
                            </select>
                            <span>
                                Omwille van een zon-, feest- of uitzonderlijke sluitingsdag
                                 kunnen we uw pakket niet op deze datum uitleveren.
                                Kies een andere leverdatum.
                            </span>

                            <hr/>

                            <div className="radio">
                                <input
                                    type="radio"
                                    name="deliverytime"
                                    value="09001700"
                                    id="delivertime1"
                                />
                                <label htmlFor="delivertime1" className="radio__label">
                                    09.00 - 17.00 uur
                                </label>
                            </div>
                            <div className="radio">
                                <input
                                    type="radio"
                                    name="deliverytime"
                                    value="08001300"
                                    id="delivertime2"
                                />
                                <label htmlFor="delivertime2" className="radio__label">
                                    08.00 - 13.00 uur
                                </label>
                            </div>
                            <div className="radio">
                                <input
                                    type="radio"
                                    name="deliverytime"
                                    value="13001800"
                                    id="delivertime3"
                                />
                                <label htmlFor="delivertime3" className="radio__label">
                                    13.00 - 18.00 uur
                                </label>
                            </div>
                            <div className="radio">
                                <input
                                    type="radio"
                                    name="deliverytime"
                                    value="11002200"
                                    id="delivertime4"
                                />
                                <label htmlFor="delivertime4" className="radio__label">
                                    11.00 - 22.00 uur
                                </label>
                            </div>

                            <hr/>

                            <div className="radio">
                                <input
                                    type="radio"
                                    name="deliverytime"
                                    value="08001000"
                                    id="delivertime5"
                                />
                                <label htmlFor="delivertime5" className="radio__label">
                                    08.00 - 10.00 uur (+ €9,95)
                                </label>
                            </div>
                            <div className="radio">
                                <input
                                    type="radio"
                                    name="deliverytime"
                                    value="09001100"
                                    id="delivertime6"
                                />
                                <label htmlFor="delivertime6" className="radio__label">
                                    09.00 - 11.00 uur (+ €9,95)
                                </label>
                            </div>
                            <div className="radio">
                                <input
                                    type="radio"
                                    name="deliverytime"
                                    value="11001400"
                                    id="delivertime7"
                                />
                                <label htmlFor="delivertime7" className="radio__label">
                                    11.00 - 14.00 uur (+ €9,95)
                                </label>
                            </div>
                            <div className="radio">
                                <input
                                    type="radio"
                                    name="deliverytime"
                                    value="14001700"
                                    id="delivertime8"
                                />
                                <label htmlFor="delivertime8" className="radio__label">
                                    14.00 - 27.00 uur (+ €9,95)
                                </label>
                            </div>
                            <div className="radio">
                                <input
                                    type="radio"
                                    name="deliverytime"
                                    value="17002100"
                                    id="delivertime9"
                                />
                                <label htmlFor="delivertime9" className="radio__label">
                                    17.00 - 21.00 uur (+ €9,95)
                                </label>
                            </div>
                            <div className="radio">
                                <input
                                    type="radio"
                                    name="deliverytime"
                                    value="18002200"
                                    id="delivertime10"
                                />
                                <label htmlFor="delivertime10" className="radio__label">
                                    18.00 - 22.00 uur (+ €9,95)
                                </label>
                            </div>

                            <hr/>

                            <a href="#" onClick={this.backToOverview}>Terug naar uw gegevens</a>

                            <button
                                className="btn btn--primary basket__submit"
                                onClick={this.nextStep}
                            >
                                Naar de kassa
                            </button>
                        </div>
                        <div className="splitview__second">
                            <div className="basket-summary__title">
                                Winkelwagen <a href="#" onClick={this.backToOverview}>Wijzigen</a>
                            </div>
                            <div className="basket-summary">
                                {this.renderSummary()}
                            </div>

                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    backToOverview = () => {
        push(this.state);
        this.props.history.push('/step1');
    }

    renderSummary = () => {
        const items = [];

        Object.entries(this.state.entries).forEach((entry) => {
            const [id, amount] = entry;
            const item = this.getItem(id);

            items.push(
                <Item
                    key={id}
                    entry={item}
                    amount={amount}
                />
            );
        });

        return items;
    }

    getItem = (id) => this.state.allItems[id];
}

export default DeliveryMethod;
