import { combineReducers } from 'redux';
import products from '../pages/Products/reducer'
import productDetail from '../pages/ProductDetail/reducer'

const rootReducer = combineReducers({
    products,
    productDetail,
});

export default rootReducer;