import {combineReducers} from 'redux';
import cart, * as fromCart from './cart';

export default combineReducers({
    cart
});

const getAddedIds = (state) => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
const getProduct = (state, id) => fromProduct.getProduct(state.products, id);

export const getCartProducts = (state) => getAddedIds(state).map((id) => ({
    ...getProducts(state, id),
    quantity: getQuantity(state, id)
}));
