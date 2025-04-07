import {
  MetaIconButtonLink,
  MetaIconButtonLinkProps,
} from '~/components/page/Header/MetaNav/MetaIconButtonLink/MetaIconButtonLink';
import React from 'react';
import {usePortalContext} from '@bitgmbh/ebiz-react-components';
import {useWishlistContext} from '~/components/wishlist/wishlist-provider';

type WishlistButtonProps = {} & Pick<
  MetaIconButtonLinkProps<'a'>,
  'show' | 'hide'
>;

const WishlistButton: React.FC<WishlistButtonProps> = ({
  show = 'lg',
  hide = 'sm',
}) => {
  const {wishlistCount, urls} = usePortalContext();
  const {wishlist} = useWishlistContext();
  return (
    <MetaIconButtonLink
      icon="icon-ebusiness-heart"
      name="Wunschliste"
      url="/wishlist"
      counter={wishlist.length}
      show={show}
      hide={hide}
    />
  );
};

export {WishlistButton};