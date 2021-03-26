import { ActionTypes, IProduct } from './types';

interface IAddProductToCart {
  type: string;
  payload: {
    product: IProduct;
  };
}

interface IAddProductToCartFailure {
  type: string;
  payload: {
    productId: number;
  };
}

export function addProductToCartRequest(product: IProduct): IAddProductToCart {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: IProduct): IAddProductToCart {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(
  productId: number,
): IAddProductToCartFailure {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId,
    },
  };
}
