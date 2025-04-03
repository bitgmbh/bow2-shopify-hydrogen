import {ProductVariant} from '@shopify/hydrogen/storefront-api-types';
import React from 'react';

interface BuyBoxHeaderProps {
  productVariant: ProductVariant;
}

export const BuyBoxHeader: React.FC<BuyBoxHeaderProps> = ({productVariant}) => (
  <div className="grid gap-aa">
    <h1 className="text-18 leading-24 md:text-22 md:leading-32 font-semibold">
      {productVariant?.title}
    </h1>
    <a
      className="block text-primary-nature-green-900 no-underline text-14 font-normal"
      target="_blank"
      href={`https://www.baywa.de/de/${productVariant?.id}`}
      rel="noreferrer"
    >
      Artikelnr.: {productVariant?.sku}
    </a>
  </div>
);