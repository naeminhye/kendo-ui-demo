import { sampleProducts } from '../../common/sample-products';

export const PRODUCT_NAMESPACE = 'product';

export const productInitalState = sampleProducts || [];

export const ActionTypes = {
    GET_PRODUCTS: 'getProducts',
    ADD_PRODUCT: 'addProduct',
    REMOVE_PRODUCT: 'removeProduct'
}