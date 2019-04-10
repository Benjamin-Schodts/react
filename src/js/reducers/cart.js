import * as actionTypes from '../constants/ActionTypes';

const initialState = {
    addedItems: [
        {
            id: 41269,
            amount: 1
        },
        {
            id: 24592,
            amount: 2
        }
    ],
    total: 100.00,
    reduction: {
        amount: 10.00,
        name: 'Korting'
    },
    delivery: {
        method: 'pickup',
        cost: 0
    }
};

const removeProductFromCart = (state, action) => (
    {
        ...state,
        addedItems: [
            ...state.addedItems.filter((item) => item.id.toString() !== action.productId.toString())
        ]
    }
);

const cart = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART: {
            const newState = state.addedItems.map((item) => {
                if (item.id.toString() === action.productId.toString()) {
                    return {
                        id: item.id,
                        amount: parseInt(action.payload || ((item.amount || 0) + 1), 10)
                    };
                }
                return item;
            });

            return {
                ...state,
                addedItems: [
                    ...newState
                ]
            };
        }
        case actionTypes.REMOVE_FROM_CART: {
            if (!action.delete) {
                const newState = state.addedItems.map((item) => {
                    if (item.id.toString() === action.productId.toString()) {
                        return {
                            id: item.id,
                            amount: parseInt(action.payload || ((item.amount || 0) - 1), 10)
                        };
                    }
                    return item;
                });

                return {
                    ...state,
                    addedItems: [
                        ...newState.filter((item) => item.amount > 0)
                    ]
                };
            }

            return removeProductFromCart(state, action);
        }
        case actionTypes.UPDATE_AMOUNT_IN_CART: {
            if (parseInt(action.payload, 10) === 0) {
                return removeProductFromCart(state, action);
            }

            const newState = state.addedItems.map((item) => {
                if (item.id.toString() === action.productId.toString()) {
                    return {
                        id: item.id,
                        amount: parseInt(action.payload, 10)
                    };
                }
                return item;
            });

            return {
                ...state,
                addedItems: [
                    ...newState
                ]
            };
        }
        case actionTypes.UPDATE_DELIVERY_METHOD: {
            return {
                ...state,
                delivery: {
                    ...state.delivery,
                    method: action.method
                }
            };
        }
        default:
            return state;
    }
};

export default cart;
