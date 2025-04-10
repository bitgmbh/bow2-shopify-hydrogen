import {Button} from '@bitgmbh/ebiz-react-components';
import React from 'react';
import {useProductDetailContext} from '~/components/product-details/product-detail-context';
import {CartForm} from '@shopify/hydrogen';
import {FetcherWithComponents} from '@remix-run/react';
import {useWishlistContext} from '~/components/wishlist/wishlist-provider';

interface AddToCartProps {
  productId: string;
  unit: string;
}

export default function AddToCart({productId, unit}: AddToCartProps) {
  const {variant} = useProductDetailContext();
  const {toggleWishlistItem} = useWishlistContext();
  const handleAddToWishlist = async () => {
    await toggleWishlistItem(variant.id);
  };

  return (
    <div className="flex gap-b self-end [&>form]:flex-1">
      <CartForm
        route="/cart"
        inputs={{
          lines: [
            {
              merchandiseId: variant.id,
              quantity: 1,
            },
          ],
        }}
        action={CartForm.ACTIONS.LinesAdd}
      >
        {(fetcher: FetcherWithComponents<any>) => (
          <>
            <Button
              fullWidth
              text={
                variant.availableForSale ? 'In den Warenkorb' : 'Ausverkauft'
              }
              name="add_to_cart"
              icon="icon-ebusiness-basket"
              className="px-a md:px-b"
              disabled={!variant.availableForSale || fetcher.state !== 'idle'}
              type="submit"
            />
          </>
        )}
      </CartForm>
      <Button
        className="shrink-0"
        variant="secondary"
        icon="icon-ebusiness-heart"
        name="add_to_wishlist"
        clickHandler={handleAddToWishlist}
      />
    </div>
  );
}