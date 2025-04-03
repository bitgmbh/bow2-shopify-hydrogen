import {createContext, useContext} from 'react';
import {
  Product,
  ProductVariant,
} from '@shopify/hydrogen-react/storefront-api-types';
import {MappedProductOptions} from '@shopify/hydrogen';

export interface ProductDetailPageContextType {
  product: Product;
  variant: ProductVariant;
  variantOptions: MappedProductOptions[];
  csrf: string;
}

export const ProductDetailPageContext =
  createContext<ProductDetailPageContextType>({
    variant: {} as ProductVariant,
    product: {} as Product,
    variantOptions: [],
    csrf: '',
  });

export const useProductDetailContext = () =>
  useContext<ProductDetailPageContextType>(ProductDetailPageContext);