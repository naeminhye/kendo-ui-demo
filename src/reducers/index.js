import { combineReducers } from 'redux';
import products from '../pages/Products/reducer'
import form from '../pages/Form/reducer'

const rootReducer = combineReducers({
    products,
    form,
});

export default rootReducer;