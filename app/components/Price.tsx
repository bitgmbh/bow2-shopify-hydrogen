import {MoneyV2} from '@shopify/hydrogen/storefront-api-types';
import {FC} from 'react';
import {useMoney} from '@shopify/hydrogen';
import {formatPrice} from '~/components/buy-box/format-price';

interface PriceProps {
  price: MoneyV2;
  className?: string;
}

export const Price: FC<PriceProps> = ({price, className}) => {
  const money = useMoney(price);
  return (
    <span className={className}>
      {formatPrice(Number(money.withoutTrailingZerosAndCurrency))}
    </span>
  );
};