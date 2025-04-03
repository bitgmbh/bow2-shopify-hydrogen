import {
  type BOW2ProductVariant,
  type ProductAvailability,
} from '@bitgmbh/npm-pubsub';
import React from 'react';
import {BuyBoxBulkPrices} from '~/components/buy-box/fragments/BuyBoxBulkPrices';
import {useBuyBoxStore} from '~/components/buy-box/buy-box-store';
import {MoneyV2} from '@shopify/hydrogen/storefront-api-types';

interface BuyBoxProductPriceProps {
  product: BOW2ProductVariant;
  availability: ProductAvailability;
  price: MoneyV2;
}

export const BuyBoxProductPrice: React.FC<BuyBoxProductPriceProps> = ({
  availability,
  product,
  price,
}) => {
  const {quantity} = useBuyBoxStore();
  return (
    price && (
      <div className="border-y border-secondary-stone-grey-200 py-b gap-aa grid grid-cols-[auto_180px] grid-rows-1">
        <Price />
        <BuyBoxBulkPrices price={price} />
      </div>
    )
  );
};