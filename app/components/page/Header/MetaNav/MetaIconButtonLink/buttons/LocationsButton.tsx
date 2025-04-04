import {
  MetaIconButtonLink,
  MetaIconButtonLinkProps,
} from '~/components/page/Header/MetaNav/MetaIconButtonLink/MetaIconButtonLink';
import React from 'react';

type LocationButtonProps = Pick<
  MetaIconButtonLinkProps<'a'>,
  'show' | 'hide' | 'url'
>;

const LocationButton: React.FC<LocationButtonProps> = ({
  url,
  show = 'lg',
  hide = 'sm',
}) => (
  <MetaIconButtonLink
    icon="icon-ebusiness-location"
    name="Standorte"
    url={url}
    show={show}
    hide={hide}
  />
);

export {LocationButton};