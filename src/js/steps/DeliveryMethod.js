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
                                <span className="chosen-method__title">

                                </span>
                            </div>
                            <h2>{this.state.title}</h2>
                        </div>
                        <div className="splitview__second">
                            <div className="basket-summary__title">
                                Winkelwagen <a href="#" onClick={this.backToOverview}>Wijzigen</a>
                            </div>
                            <div className="basket-summary">
                                {this.renderSummary()}
                            </div>
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
