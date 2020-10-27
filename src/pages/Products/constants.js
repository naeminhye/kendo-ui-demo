import { sampleProducts } from '../../data/sample-products';

export const PRODUCT_NAMESPACE = 'product';

export const productInitalState = sampleProducts || [];

export const ActionTypes = {
    FETCH_PRODUCTS: 'fetchProducts',
    ADD_PRODUCT: 'addProduct',
    REMOVE_PRODUCT: 'removeProduct',
    UPDATE_PRODUCT: 'updateProduct',
}