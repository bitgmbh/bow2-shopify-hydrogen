import React, {Suspense} from 'react';
import {Await, Form, NavLink, useAsyncValue} from '@remix-run/react';
import {
  type CartViewPayload,
  useAnalytics,
  useOptimisticCart,
} from '@shopify/hydrogen';
import type {CartApiQueryFragment, HeaderQuery} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';
import ContainerFluid from '~/components/ContainerFluid';
import {Button} from '@bitgmbh/ebiz-react-components';
import {MetaIconButtonLink} from '~/components/page/Header/MetaNav/MetaIconButtonLink/MetaIconButtonLink';
import {MyAccountUrl} from '~/components/page/Header/MetaNav/MetaIconButtonLink/buttons';
import {PortalSwitcher} from '~/components/page/Header/PortalSwitcher';

interface HeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

type Viewport = 'desktop' | 'mobile';

export function Header({
  header,
  isLoggedIn,
  cart,
  publicStoreDomain,
}: HeaderProps) {
  const {shop, menu} = header;
  return (
    <header className="flex flex-col  w-full mb-d">
      <PortalSwitcher />
      <ContainerFluid className="flex gap-c !mb-0 py-c">
        <NavLink
          prefetch="intent"
          to="/"
          style={activeLinkStyle}
          end
          className="grid grid-cols-[auto_auto] items-center gap-c no-underline whitespace-nowrap"
        >
          <svg
            className="h-[22px] w-[74px] text-primary-nature-green-600 md:h-[32px] md:w-[102px]"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use xlinkHref="/assets/icons.symbols.svg#icon-ebusiness-baywa-logo-m" />
          </svg>
          <div className="text-[20px] text-primary-nature-green-600 font-normal text-nowrap basis-auto">
            Für die Landwirtschaft
          </div>
        </NavLink>
        <Form action="/search" method="get" className="w-full">
          <div className="relative">
            <input
              name="q"
              autoComplete="off"
              className="focus relative z-20 block pl-c h-f flex-1 truncate rounded-full border border-secondary-stone-grey-200 bg-secondary-stone-grey-50 pr-f search-cancel:appearance-none focus:outline focus:outline-4 focus:outline-primary-nature-green-300 w-full"
              type="text"
            />
            <Button
              ariaLabel="Nach Suchbegriff suchen"
              className="absolute right-aa top-1/2 z-20 flex size-e -translate-y-1/2 items-center justify-center rounded-full bg-primary-nature-green-600 text-white"
              icon="icon-marketing-suche"
              tabIndex={-1}
              title="Suchen"
              type="submit"
              variant="primary"
            />
          </div>
        </Form>
        <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
      </ContainerFluid>
      <HeaderMenu
        menu={menu}
        viewport="desktop"
        primaryDomainUrl={header.shop.primaryDomain.url}
        publicStoreDomain={publicStoreDomain}
      />
    </header>
  );
}

export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}: {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
  viewport: Viewport;
  publicStoreDomain: HeaderProps['publicStoreDomain'];
}) {
  const className = `header-menu-${viewport}`;
  const {close} = useAside();

  return (
    <nav className=" h-f bg-secondary-stone-grey-100" role="navigation">
      <ContainerFluid className="flex items-center [grid-area:nav-header] !mb-0 h-full">
        {viewport === 'mobile' && (
          <NavLink
            end
            onClick={close}
            prefetch="intent"
            style={activeLinkStyle}
            to="/"
          >
            Home
          </NavLink>
        )}

        <div className="flex items-center justify-between flex-1">
          {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
            if (!item.url) return null;

            // if the url is internal, we strip the domain
            const url =
              item.url.includes('myshopify.com') ||
              item.url.includes(publicStoreDomain) ||
              item.url.includes(primaryDomainUrl)
                ? new URL(item.url).pathname
                : item.url;
            return (
              <NavLink
                className="font-semibold"
                end
                key={item.id}
                onClick={close}
                prefetch="intent"
                to={url}
              >
                {item.title}
              </NavLink>
            );
          })}
        </div>
      </ContainerFluid>
    </nav>
  );
}

function HeaderCtas({
  isLoggedIn,
  cart,
}: Pick<HeaderProps, 'isLoggedIn' | 'cart'>) {
  return (
    <nav className="flex gap-a items-center" role="navigation">
      <MetaIconButtonLink.Locations
        key="locations"
        url={'https://www.baywa.de/de/i/standorte'}
      />
      <MetaIconButtonLink.MyAccount
        key="my-account"
        urls={{} as MyAccountUrl}
        user={{userName: 'Maxi Mustermann'}}
        isAuthenticated={true}
      />
      <MetaIconButtonLink.Wishlist key="wishlist" />
      <MetaIconButtonLink.Minicart key="minicart" />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <button
      className="header-menu-mobile-toggle reset"
      onClick={() => open('mobile')}
    >
      <h3>☰</h3>
    </button>
  );
}

function SearchToggle() {
  const {open} = useAside();
  return (
    <button className="reset" onClick={() => open('search')}>
      Suchen
    </button>
  );
}

function CartBadge({count}: {count: number | null}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        } as CartViewPayload);
      }}
    >
      Cart {count === null ? <span>&nbsp;</span> : count}
    </a>
  );
}

function CartToggle({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue() as CartApiQueryFragment | null;
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    },
  ],
};

function activeLinkStyle({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}