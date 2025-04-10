import {FC} from 'react';
import {
  CartLineItem,
  CartLineType,
} from '~/components/cart/cart-line/CartLineItem';

interface CartLinesProps {
  lines: CartLineType[];
  className?: string;
}

export const CartLines: FC<CartLinesProps> = ({lines, className}) => {
  return (
    <ol className="flex flex-col auto-rows-fr divide-y divide-secondary-stone-grey-300">
      {lines?.map((line) => (
        <li
          key={line.id}
          className="[&:not(:first-child)]:pt-d [&:not(:last-child)]:pb-c"
        >
          <CartLineItem line={line} />
        </li>
      ))}
    </ol>
  );
};