import React, {ComponentPropsWithoutRef, FC} from 'react';
import {
  BaywaIcon,
  BaywaIconSelectionType,
} from '@bitgmbh/ebiz-react-components';
import {clsx} from 'clsx';
import {CartLineType} from '~/components/cart/cart-line/CartLineItem';
import type {CartLineUpdateInput} from '@shopify/hydrogen/storefront-api-types';
import {CartForm} from '@shopify/hydrogen';

interface QuantityControlButtonProps
  extends ComponentPropsWithoutRef<'button'> {
  variant: 'decrease' | 'increase';
  icon: BaywaIconSelectionType;
  line: CartLineUpdateInput;
}

const QuantityControlButton: FC<QuantityControlButtonProps> = ({
  variant,
  icon,
  line,
  ...btnProps
}) => (
  <CartForm
    action={CartForm.ACTIONS.LinesUpdate}
    inputs={{lines: [line]}}
    route={'/cart'}
  >
    <button
      className={clsx(
        'size-e transition text-secondary-stone-grey-400 border border-secondary-stone-grey-400 bg-white grid place-items-center hover:bg-secondary-stone-grey-400 hover:text-white active:bg-secondary-stone-grey-600',
        `[grid-area:${variant}]`,
      )}
      {...btnProps}
    >
      <BaywaIcon icon={icon} />
    </button>
  </CartForm>
);

interface QuantityChooserProps extends ComponentPropsWithoutRef<'input'> {
  className?: string;
  line: CartLineType;
}

export function QuantityChooser({
  line,
  disabled,
  className,
  ...inputProps
}: QuantityChooserProps) {
  const {id, quantity, isOptimistic} = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));

  return (
    <div
      className={clsx(
        `grid  grid-cols-[40px_56px_40px] items-center justify-start`,
        `[grid-template-areas:'decrease_input_increase']`,
        className,
      )}
    >
      <QuantityControlButton
        line={{id, quantity: prevQuantity}}
        aria-label="Produktmenge reduzieren"
        disabled={disabled}
        icon={
          quantity === 1
            ? 'icon-marketing-loeschen-papierkorb'
            : 'icon-marketing-minus'
        }
        variant="decrease"
      />
      <input
        {...inputProps}
        className={clsx(
          'text-center [grid-area:input]',
          'border-y border-secondary-stone-grey-400 placeholder:text-secondary-stone-grey-300 h-e px-a focus-within:outline focus-within:outline-focus focus-within:z-[10]',
          '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
        )}
        type="number"
        defaultValue={quantity}
        disabled={disabled}
      />
      <QuantityControlButton
        aria-label="Produktmenge erhöhen"
        line={{id, quantity: nextQuantity}}
        disabled={disabled}
        icon="icon-marketing-plus"
        variant="increase"
      />
    </div>
  );
}