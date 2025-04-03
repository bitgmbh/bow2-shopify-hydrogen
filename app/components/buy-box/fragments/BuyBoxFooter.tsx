import AddToCart from '~/components/buy-box/fragments/AddToCart';
import React from 'react';
import {ProductVariant} from '@shopify/hydrogen-react/storefront-api-types';

interface BuyBoxFooterProps {
  productVariant: ProductVariant;
}

export const BuyBoxFooter: React.FC<BuyBoxFooterProps> = ({productVariant}) => {
  return <AddToCart productId={productVariant!.id} unit={''} />;
};