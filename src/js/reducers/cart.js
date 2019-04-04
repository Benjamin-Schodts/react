import {
    REMOVE_FROM_CART,
    ADD_TO_CART,
    CHECKOUT_REQUEST,
    DECREMENT_QUANTITY
} from '../constants/ActionTypes';

export const getItem = (state = this.allItems, id) => state[id];

export const getQuantity = (state, id) => state.quaddedItems.quantityById(id) || 0;

export const getAddedIds = (state) => state.addedItems.addedIds;

export const getAllItems = (state) => state.allItems;

const initialState = {
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
    addedItems: {
        addedIds: [],
        quantityById: {}
    },
    reduction: {
        name: 'Korting: ',
        percentage: false,
        amount: 10.00
    },
    lastRoute: '/step1'
};

const addedIds = (state = initialState.addedItems.addedIds, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            if (state.indexOf(action.id) !== -1) {
                return state;
            }
            return [
                ...state,
                action.id
            ];
        }
        case REMOVE_FROM_CART: {
            if (state.indexOf(action.id) !== -1) {
                return state;
            }
            return [
                ...state.splice(action.id, 1)
            ];
        }
        default:
            return state;
    }
};

const quantityById = (state = initialState.addedItems.quantityById, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const {id} = action;
            return {
                ...state,
                [id]: (state[id] || 0) + 1
            };
        }
        case REMOVE_FROM_CART: {
            const {id} = action;
            return {
                ...state.splice(id, 1)
            };
        }
        case DECREMENT_QUANTITY: {
            const {id} = action;
            if (getQuantity(state, id) > 1) {
                return {
                    ...state,
                    [id]: state[id] - 1
                };
            }
            return {
                state
            };
        }
        default:
            return state;
    }
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case CHECKOUT_REQUEST:
            return initialState;
        default:
            return {
                addedIds: addedIds(state.addedItems.addedIds, action),
                quantityById: quantityById(state.addedItems.quantityById, action)
            };
    }
};

export default cart;
