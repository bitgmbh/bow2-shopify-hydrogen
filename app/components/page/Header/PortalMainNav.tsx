import React, {useState} from 'react';
import {Transition} from '@headlessui/react';
import {clsx} from 'clsx';
import {LinkOrAnchor} from '@bitgmbh/ebiz-react-components';
import {FlyoutMenu} from '~/components/page/Header/FlyoutMenu';
import {HeaderProps} from '~/components/page/Header/Header';

export interface PortalMainNavItem {
  text: string;
  link: string;
  teaser?: string | null;
  linkTarget?: string;
  subMenuItems: PortalMainNavItem[];
}

export interface PortalMainNavProps {
  menu: HeaderProps['header']['menu'];
  className?: string;
}

export function PortalMainNav({className, menu}: PortalMainNavProps) {
  const [activeItem, setActiveItem] = useState<string>('');

  return (
    <nav
      className={clsx(
        'relative xs:hidden bg-secondary-stone-grey-100 xs:text-14 md:block lg:text-16 font-semibold',
        className,
      )}
      onMouseLeave={() => {
        setActiveItem('');
      }}
    >
      <ul className="w-content relative mx-auto flex items-center justify-between gap-x-a py-b">
        {menu?.items.map((item) => (
          <React.Fragment key={item.title}>
            <li
              onMouseOver={() => setActiveItem(item.id)}
              onFocus={() => setActiveItem(item.id)}
            >
              <LinkOrAnchor
                to={item.url ? new URL(item.url).pathname : '#'}
                className={clsx(
                  'flex cursor-pointer gap-a no-underline hover:text-primary-nature-green-600',
                )}
              >
                {item.title}
                {/* this needs a solution from the mock for icons, which currently is not implemented */
                /* Also not implemented is A-Z for LWP or Angebote */}
              </LinkOrAnchor>
            </li>
            <Transition
              as={'li'}
              className="absolute inset-x-0 top-g z-10 grid w-full grid-cols-12 overflow-hidden bg-white transition-all"
              show={activeItem === item.id && (item.items?.length ?? 0) > 0}
              enter="ease-out duration-300"
              enterFrom="grid-rows-[0fr] h-0"
              enterTo="grid-rows-[1fr]"
              leave="duration-0"
              leaveFrom="grid-rows-1"
              leaveTo="grid-rows-[0fr] h-0"
            >
              <FlyoutMenu
                items={item.items}
                menuClickHandler={() => setActiveItem('')}
              />
            </Transition>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}