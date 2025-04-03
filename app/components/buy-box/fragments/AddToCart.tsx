import {Button} from '@bitgmbh/ebiz-react-components';
import {useRef} from 'react';

interface AddToCartProps {
  productId: string;
  unit: string;
}

export default function AddToCart({productId, unit}: AddToCartProps) {
  const addToCartFormRef = useRef<HTMLFormElement>(null);

  const handleAddToCart = async () => {
    if (addToCartFormRef.current) {
      addToCartFormRef.current.submit();
    }
  };

  const handleAddToWishlist = async () => {};

  return (
    <div className="flex gap-b self-end">
      <form
        ref={addToCartFormRef}
        method="POST"
        action="/cart/add"
        className="flex-1"
      >
        <input type="hidden" name="csrf" value={''} />
        <input type="hidden" name="unit" value={unit} />
        <input type="hidden" name="productId" value={productId} />
        <input type="hidden" name="quantity" defaultValue={1} />
        <Button
          fullWidth
          text="In den Warenkorb"
          name="add_to_cart"
          icon="icon-ebusiness-basket"
          className="px-a md:px-b"
          clickHandler={handleAddToCart}
        />
      </form>
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