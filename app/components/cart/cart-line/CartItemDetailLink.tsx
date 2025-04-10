import React, {FC, PropsWithChildren} from 'react';
import {clsx} from 'clsx';

interface CartItemDetailLinkProps extends PropsWithChildren {
  url: string;
  title: string;
  className?: string;
}

export const CartItemDetailLink: FC<CartItemDetailLinkProps> = ({
  url,
  title,
  className,
  children,
}) => (
  <a
    className={clsx('no-underline', className)}
    href={url}
    aria-label={`Zu ${title} springen`}
  >
    {children}
  </a>
);