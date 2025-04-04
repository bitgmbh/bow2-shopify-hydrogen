import {
  MetaIconButtonLink,
  MetaIconButtonLinkProps,
} from '~/components/page/Header/MetaNav/MetaIconButtonLink/MetaIconButtonLink';
import React from 'react';
import {useCart} from '@shopify/hydrogen-react';

type MiniCartButtonProps = {} & Pick<
  MetaIconButtonLinkProps<'a'>,
  'show' | 'hide'
>;

const MiniCartButton: React.FC<MiniCartButtonProps> = ({show = 'sm', hide}) => {
  const cart = useCart();

  console.log('CART', cart);
  return (
    <MetaIconButtonLink
      icon="icon-ebusiness-basket"
      name="Warenkorb"
      url={'/cart'}
      counter={cart?.totalQuantity ?? 0}
      show={show}
      hide={hide}
    />
  );
};

export {MiniCartButton};