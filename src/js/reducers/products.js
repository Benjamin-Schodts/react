import * as actionTypes from '../constants/ActionTypes';

const initialState = {
    products: {
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
    }
};

const product = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS:
            return state;
        default:
            return state;
    }
};

export const getProduct = (state, id) => state[id];

export default product;
