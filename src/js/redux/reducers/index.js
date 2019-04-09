import {combineReducers} from 'redux';
import cart from './cart';
import products from './products';

export default combineReducers({
    products,
    cart
});

// const getAddedIds = (state) => fromCart.getAddedIds(state.cart);
// const getProduct = (state, id) => fromProducts.getProduct(state.products, id);
// const getProducts = (state) => fromProducts.getProducst(state.products);
