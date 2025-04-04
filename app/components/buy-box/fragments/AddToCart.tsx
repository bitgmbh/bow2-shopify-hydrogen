import {Button} from '@bitgmbh/ebiz-react-components';
import {useRef} from 'react';
import {useProductDetailContext} from '~/components/product-details/product-detail-context';
import {useCart} from '@shopify/hydrogen-react';

interface AddToCartProps {
  productId: string;
  unit: string;
}

export default function AddToCart({productId, unit}: AddToCartProps) {
  const addToCartFormRef = useRef<HTMLFormElement>(null);
  const cart = useCart();
  const {variant} = useProductDetailContext();

  const handleAddToWishlist = async () => {};

  const handleAddToCart = () =>
    cart?.linesAdd(
      variant
        ? [
            {
              merchandiseId: variant.id,
              quantity: 1,
            },
          ]
        : [],
    );
  return (
    <div className="flex gap-b self-end">
      <Button
        fullWidth
        text={variant.availableForSale ? 'In den Warenkorb' : 'Ausverkauft'}
        name="add_to_cart"
        icon="icon-ebusiness-basket"
        className="flex-1 px-a md:px-b"
        disabled={!variant.availableForSale}
        clickHandler={() => handleAddToCart()}
        type="submit"
      />
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