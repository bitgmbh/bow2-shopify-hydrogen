import React from 'react';
import clsx from 'clsx';
import {WishlistButton} from '~/components/page/Header/MetaNav/MetaIconButtonLink/buttons/WishlistButton';
import {ContactButton} from '~/components/page/Header/MetaNav/MetaIconButtonLink/buttons/ContactButton';
import {LocationButton} from '~/components/page/Header/MetaNav/MetaIconButtonLink/buttons/LocationsButton';
import {MyAccountButton} from '~/components/page/Header/MetaNav/MetaIconButtonLink/buttons/MyAccountButton/MyAccountButton';
import {MiniCartButton} from '~/components/page/Header/MetaNav/MetaIconButtonLink/buttons/MiniCartButton';
import {HomeButton} from '~/components/page/Header/MetaNav/MetaIconButtonLink/buttons/HomeButton';
import {
  BaywaIcon,
  BaywaIconSelectionType,
} from '@bitgmbh/ebiz-react-components';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

type MetaIconButtonLinkProps<T extends React.ElementType> = {
  icon: BaywaIconSelectionType;
  name: string;
  url?: string;
  className?: string;
  linkClassName?: string;
  iconClasses?: string;
  counter?: number;
  show?: Breakpoint;
  hide?: Breakpoint;
  children?: React.ReactNode;
} & (T extends 'a'
  ? React.AnchorHTMLAttributes<HTMLAnchorElement>
  : React.ComponentPropsWithoutRef<T>);

const visibilityClasses = {
  show: {
    sm: 'sm:grid',
    md: 'md:grid',
    lg: 'lg:grid',
    xl: 'xl:grid',
  },
  hide: {
    sm: 'sm:hidden',
    md: 'md:hidden',
    lg: 'lg:hidden',
    xl: 'xl:hidden',
  },
};

const MetaIconButtonLink = <T extends React.ElementType = 'a'>({
  children,
  className,
  linkClassName,
  counter,
  hide,
  icon,
  iconClasses,
  name,
  show,
  url,
  as,
  ...otherProps
}: MetaIconButtonLinkProps<T> & {as?: T}) => {
  const showClass = show ? visibilityClasses.show[show] : '';
  const hideClass = hide ? visibilityClasses.hide[hide] : '';
  const combinedClasses = `${showClass} ${hideClass}`;

  const counterRingClasses =
    'relative after:content-normal after:min-w-[20px] after:bg-accent-fire-red-600 after:flex after:place-content-center after:absolute after:right-[20%] after:rounded-full after:-top-aa after:border-white after:border';
  const counterTextClasses =
    'after:absolute after:content-[var(--counter)] after:text-white after:text-xs after:leading-[1.2rem] after:px-aa';
  const cssVarStyle = counter ? {'--counter': `'${counter}'`} : {};
  const baywaIconClass = 'size-b lg:size-c';

  const Component = as ?? 'a';
  const linkProps = Component === 'a' ? {href: url} : null;
  return (
    <div
      className={clsx(
        'relative grid cursor-pointer place-items-center text-10 font-medium text-secondary-stone-grey-600 hover:text-primary-nature-green-600 md:text-12 lg:text-14',
        className,
      )}
      {...otherProps}
    >
      <Component
        style={cssVarStyle as React.CSSProperties}
        className={clsx(
          linkClassName,
          'grid place-content-center place-items-center bg-white no-underline',
          counter && counterRingClasses,
          counter && counterTextClasses,
          combinedClasses,
        )}
        {...linkProps}
      >
        <BaywaIcon className={clsx(baywaIconClass, iconClasses)} icon={icon} />
        {name}
      </Component>

      {children}
    </div>
  );
};

MetaIconButtonLink.Contact = ContactButton;
MetaIconButtonLink.Locations = LocationButton;
MetaIconButtonLink.MyAccount = MyAccountButton;
MetaIconButtonLink.Wishlist = WishlistButton;
MetaIconButtonLink.Minicart = MiniCartButton;
MetaIconButtonLink.Home = HomeButton;

export {MetaIconButtonLink, type MetaIconButtonLinkProps};