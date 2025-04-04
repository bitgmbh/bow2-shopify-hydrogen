import {
  MetaIconButtonLink,
  MetaIconButtonLinkProps,
} from '~/components/page/Header/MetaNav/MetaIconButtonLink/MetaIconButtonLink';
import React from 'react';

type HomeButtonProps = Pick<
  MetaIconButtonLinkProps<'a'>,
  'show' | 'hide' | 'url'
>;

const HomeButton: React.FC<HomeButtonProps> = ({
  url,
  show = 'sm',
  hide = 'lg',
}) => (
  <MetaIconButtonLink
    icon={'icon-ebusiness-home-absprung'}
    name="Startseite"
    url={url}
    show={show}
    hide={hide}
  />
);

export {HomeButton};