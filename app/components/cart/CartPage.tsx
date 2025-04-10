import {CartLines} from '~/components/cart/cart-line/CartLines';
import React, {FC} from 'react';
import {CheckoutSteps} from '~/components/checkout/CheckoutSteps';
import type {CartApiQueryFragment} from '../../../storefrontapi.generated';
import {useOptimisticCart} from '@shopify/hydrogen';
import {CartSummary} from '~/components/cart/CartSummary';

interface CartPageProps {
  cart: CartApiQueryFragment | null;
}

export const CartPage: FC<CartPageProps> = ({cart: originalCart}) => {
  const cart = useOptimisticCart(originalCart);
  const hasItems = (cart.lines.nodes.length ?? 0) > 0;
  return (
    <div className="flex flex-col gap-b md:gap-c">
      <CheckoutSteps activeStepKey="cart" />
      {hasItems ? (
        <div className="grid grid-cols-[auto_400px] gap-c">
          <CartLines lines={cart.lines.nodes} />
          <CartSummary cart={cart} layout="aside" />
        </div>
      ) : (
        'Aktuell befinden sich keine Artikel in Ihrem Warenkorb.'
      )}
    </div>
  );
};