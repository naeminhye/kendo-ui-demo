import { combineReducers } from 'redux';
import products from '../pages/Products/reducer'

const rootReducer = combineReducers({
    products: products
});

export default rootReducer;