import {useState} from 'react';
import {clsx} from 'clsx';
import {BaywaIcon, LinkOrAnchor} from '@bitgmbh/ebiz-react-components';
import {MenuItem} from '@shopify/hydrogen/storefront-api-types';

interface FlyoutMenuProps {
  className?: string;
  items: MenuItem[];
  menuClickHandler?: () => void;
}

interface FlyoutLinkBlockProps {
  menuClickHandler?: () => void;
  item: MenuItem;
}

interface FlyoutIconTextItemProps {
  text: string;
  link: string;
  menuClickHandler?: () => void;
  withIcon?: boolean;
}

function FlyoutIconTextItem({
  text,
  link,
  menuClickHandler,
  withIcon = true,
}: FlyoutIconTextItemProps) {
  return (
    <li className="flex items-center gap-a">
      {withIcon && (
        <BaywaIcon icon="icon-ebusiness-link-forward" size="size-a" />
      )}
      <LinkOrAnchor
        className="font-normal no-underline"
        to={link}
        onClick={menuClickHandler}
      >
        {text}
      </LinkOrAnchor>
    </li>
  );
}

function FlyoutLinkBlock({
  item: {items, url, title},
  menuClickHandler,
}: FlyoutLinkBlockProps) {
  return (
    <ul className="grid gap-a">
      <li className="font-bold text-primary-nature-green-600">
        <LinkOrAnchor
          className="font-normal no-underline"
          to={url ?? '#'}
          onClick={menuClickHandler}
        >
          {title}
        </LinkOrAnchor>
      </li>
      {items?.map(({title, id, url}) => (
        <FlyoutIconTextItem
          key={id}
          text={title}
          link={url ?? '#'}
          menuClickHandler={menuClickHandler}
        />
      ))}
      {items.length > 0 && (
        <FlyoutIconTextItem
          text="Alle anzeigen"
          link={url ?? '#'}
          menuClickHandler={menuClickHandler}
        />
      )}
    </ul>
  );
}

function FlyoutMenu({className, items, menuClickHandler}: FlyoutMenuProps) {
  const [activeMenuItem, setActiveMenuItem] = useState(items[0]);
  return (
    <>
      <ul
        className={clsx(
          className,
          'col-span-3 h-full min-h-0 bg-secondary-stone-grey-100 px-c py-b',
        )}
        data-flyout
      >
        {items.map((item, index) => (
          <li
            key={item.title}
            onMouseOver={() => {
              setActiveMenuItem(item);
            }}
            onFocus={() => {
              setActiveMenuItem(item);
            }}
            className={clsx(
              'flex cursor-pointer items-start justify-between py-a',
              {
                '-mx-c flex place-items-center bg-primary-nature-green-600 pl-c pr-a text-white':
                  item.id === activeMenuItem.id,
              },
            )}
          >
            <LinkOrAnchor
              className="flex basis-full items-center justify-between font-normal no-underline hover:text-current"
              to={item.url ?? '#'}
              title={item.title}
              target="_self"
            >
              <>
                {item.title}
                {item.id === activeMenuItem.id && (
                  <BaywaIcon
                    className="ml-auto fill-white"
                    icon="icon-ebusiness-arrow-right"
                    size="size-b"
                  />
                )}
              </>

              {index === items.length - 1 && <span>Alle Anzeigen</span>}
            </LinkOrAnchor>
          </li>
        ))}
      </ul>
      <ul className="col-span-9 grid h-fit min-h-0 grid-cols-3 items-start gap-y-c p-d">
        {activeMenuItem?.items?.map((subMenuItem) => (
          <li className="basis-1/3" key={subMenuItem.title}>
            <FlyoutLinkBlock
              item={subMenuItem}
              menuClickHandler={menuClickHandler}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export {FlyoutMenu};