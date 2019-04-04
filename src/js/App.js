import React, {Component} from 'react';
import {fetch, push} from './utils/remoteState';

import '../scss/style.scss';

class App extends Component {
    constructor() {
        super();
        this.state = fetch();
        this.state.title = 'Uw Winkelmandje';
    }

    render() {
        return (
            <div>
                {this.state.lastRoute
                    ? this.props.history.push(this.state.lastRoute)
                    : this.pushState()
                }
            </div>
        );
    }

    pushState = () => {
        push(
            {
                allItems: {
                    41269: {
                        title: '2017 Vermentino (0,75L)',
                        subtitle: 'Casanova della Spinetta',
                        price: 25.00,
                        imageUrl: 'https://picsum.photos/200?random',
                        vat: 21
                    },
                    24592: {
                        title: '2017 Cirò Bianco (0,75L)',
                        subtitle: 'Librandi',
                        price: 35.00,
                        imageUrl: 'https://picsum.photos/200/200/?random',
                        vat: 21
                    },
                    rnd: {
                        title: '2013 Nero Ossidiana (0,75L)',
                        subtitle: 'Tenatu di Castellaro',
                        price: 15.00,
                        imageUrl: 'https://picsum.photos/200/?random',
                        promo: {
                            title: '5plus1',
                            condition: 4
                        },
                        vat: 21
                    }
                },
                entries: {
                    41269: 1,
                    24592: 1,
                    rnd: 1
                },
                reduction: {
                    name: 'Korting: ',
                    percentage: false,
                    amount: 10.00
                },
                subTotal: 0.00,
                lastRoute: '/step1'
            }
        );
        window.location = '/';
    }
}

export default App;
