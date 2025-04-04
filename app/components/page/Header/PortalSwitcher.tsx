import React, {ElementType} from 'react';
import clsx from 'clsx';
import {
  BaywaIcon,
  BaywaIconSelectionType,
  LinkContext,
  LinkOrAnchor,
} from '@bitgmbh/ebiz-react-components';
import {PortalSwitcherLinks} from '~/components/data/header.portal-switcher';

interface Portal {
  icon: BaywaIconSelectionType;
  name: string;
  current?: boolean;
  to?: string;
}

interface PortalSwitcherProps<T extends React.ElementType = 'a'> {
  unstyled?: boolean;
  className?: string;
  as?: T;
}

const PortalListElement: React.FC<
  Pick<Portal, 'icon' | 'name' | 'current'>
> = ({icon, name, current}) => (
  <>
    <BaywaIcon
      icon={icon}
      className={clsx('mr-[10px] size-[32px]', {
        'fill-white': !current,
        'text-secondary-stone-grey-400': current,
      })}
      viewBox="0 0 38 38"
    />
    {name}
  </>
);

const PortalElement = ({icon, name, to, current}: Portal) => (
  <>
    <li
      className={clsx('flex h-full place-items-center', {
        'cursor-pointer px-[18px] text-white hover:bg-primary-nature-green-400':
          !current,
        'bg-white pl-[10px] pr-[20px]': current,
        'pl-[12px]': /energie/.test(icon as string),
      })}
    >
      {current ? (
        <PortalListElement icon={icon} name={name} current />
      ) : (
        to && (
          <LinkOrAnchor
            to={to}
            className="flex place-items-center text-16 font-normal text-white no-underline"
          >
            <PortalListElement icon={icon} name={name} current={false} />
          </LinkOrAnchor>
        )
      )}
    </li>
  </>
);

const PortalSwitcher = <T extends ElementType = 'a'>({
  unstyled = false,
  className,
}: PortalSwitcherProps<T>) => {
  return (
    <LinkContext.Provider value={{as: 'a'}}>
      <nav
        className={clsx(
          unstyled ? undefined : className,
          'bg-primary-nature-green-600',
        )}
      >
        <ol className="w-content mx-auto hidden h-[50px] divide-x divide-white text-16 md:flex">
          {PortalSwitcherLinks.map((item) => (
            <PortalElement key={item.name} {...item} />
          ))}
        </ol>
      </nav>
    </LinkContext.Provider>
  );
};

export {PortalSwitcher, type PortalSwitcherProps, type Portal};