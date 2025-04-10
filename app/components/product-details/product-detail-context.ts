import {createContext, useContext} from 'react';
import {MappedProductOptions} from '@shopify/hydrogen';
import type {Bow2ProductVariant} from '~/components/ProductTypes';
import type {Product} from '@shopify/hydrogen-react/storefront-api-types';

export interface ProductDetailPageContextType {
  variant: Bow2ProductVariant;
  product: Product;
  productOptions: MappedProductOptions[];
  csrf: string;
}

export const ProductDetailPageContext =
  createContext<ProductDetailPageContextType>({
    variant: {} as Bow2ProductVariant,
    product: {} as Product,
    productOptions: [],
    csrf: '',
  });

export const useProductDetailContext = () =>
  useContext<ProductDetailPageContextType>(ProductDetailPageContext);