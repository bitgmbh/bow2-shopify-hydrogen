import type {MoneyV2} from '@shopify/hydrogen/storefront-api-types';
import {Price} from '~/components/Price';
import {clsx} from 'clsx';

interface ProductPriceProps {
  price?: MoneyV2;
  className?: string;
  compareAtPrice?: MoneyV2 | null;
}

export function ProductPrice({
  price,
  compareAtPrice,
  className,
}: ProductPriceProps) {
  return (
    <div
      className={clsx(
        'flex place-items-center gap-aa text-22 leading-32 font-semibold',
        className,
      )}
    >
      {compareAtPrice ? (
        <div className="product-price-on-sale">
          {price && <Price price={price} />}
          <s>
            <span>
              <Price price={compareAtPrice} />
            </span>
          </s>
        </div>
      ) : price ? (
        <Price price={price} />
      ) : (
        <span>&nbsp;</span>
      )}
    </div>
  );
}