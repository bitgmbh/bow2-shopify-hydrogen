import {
  MetaIconButtonLink,
  MetaIconButtonLinkProps,
} from '~/components/page/Header/MetaNav/MetaIconButtonLink/MetaIconButtonLink';
import React from 'react';
import {usePortalContext} from '@bitgmbh/ebiz-react-components';

type WishlistButtonProps = {} & Pick<
  MetaIconButtonLinkProps<'a'>,
  'show' | 'hide'
>;

const WishlistButton: React.FC<WishlistButtonProps> = ({
  show = 'lg',
  hide = 'sm',
}) => {
  const {wishlistCount, urls} = usePortalContext();

  return (
    <MetaIconButtonLink
      icon="icon-ebusiness-heart"
      name="Wunschliste"
      url={urls?.wishlist as string}
      counter={wishlistCount}
      show={show}
      hide={hide}
    />
  );
};

export {WishlistButton};