import {
  MetaIconButtonLink,
  MetaIconButtonLinkProps,
} from '~/components/page/Header/MetaNav/MetaIconButtonLink/MetaIconButtonLink';
import React from 'react';

type ContactButtonProps = Pick<
  MetaIconButtonLinkProps<'a'>,
  'show' | 'hide' | 'url'
>;

const ContactButton: React.FC<ContactButtonProps> = ({
  url,
  show = 'sm',
  hide = 'lg',
}) => (
  <MetaIconButtonLink
    icon="icon-marketing-hotlinestoerungsformulare"
    name="Kontakt"
    url={url}
    show={show}
    hide={hide}
  />
);

export {ContactButton};