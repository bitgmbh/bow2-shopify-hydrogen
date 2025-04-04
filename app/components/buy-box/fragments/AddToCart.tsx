import {Button} from '@bitgmbh/ebiz-react-components';
import {useRef} from 'react';
import {CartForm} from '@shopify/hydrogen';
import type {FetcherWithComponents} from '@remix-run/react';
import {useProductDetailContext} from '~/components/product-details/product-detail-context';

interface AddToCartProps {
  productId: string;
  unit: string;
}

export default function AddToCart({productId, unit}: AddToCartProps) {
  const addToCartFormRef = useRef<HTMLFormElement>(null);
  const {variant} = useProductDetailContext();
  const handleAddToCart = async () => {
    if (addToCartFormRef.current) {
      addToCartFormRef.current.submit();
    }
  };

  const handleAddToWishlist = async () => {};
  const lines = variant
    ? [
        {
          merchandiseId: variant.id,
          quantity: 1,
          variant,
        },
      ]
    : [];
  return (
    <div className="flex gap-b self-end [&>form]:flex-1">
      <CartForm
        route="/cart"
        inputs={{lines}}
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