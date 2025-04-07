import type {MoneyV2} from '@shopify/hydrogen/storefront-api-types';
import {Price} from '~/components/Price';

export function ProductPrice({
  price,
  compareAtPrice,
}: {
  price?: MoneyV2;
  compareAtPrice?: MoneyV2 | null;
}) {
  return (
    <div className="flex place-items-center gap-aa text-22 leading-32 font-semibold">
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