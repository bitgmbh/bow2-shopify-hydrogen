import {MetaIconButtonLink} from '~/components/page/Header/MetaNav/MetaIconButtonLink/MetaIconButtonLink';
import React, {useState} from 'react';
import clsx from 'clsx';
import {BaywaIcon, Button, LinkOrAnchor} from '@bitgmbh/ebiz-react-components';

interface MyAccountUrl {
  loginUrl: string;
  logoutUrl: string;
  myAccountUrl: string;
}

interface MyAccountButtonProps {
  urls: MyAccountUrl;
  isAuthenticated: boolean;
  user?: MyAccountUser;
}

interface MyAccountUser {
  userName?: string;
  customerId?: string;
}

type MyAccountFlyoutProps = Pick<MyAccountButtonProps, 'user'> &
  Pick<MyAccountButtonProps, 'urls'>;

const MyAccountMenuHighlight = () => (
  <div
    className={clsx(
      'absolute z-[-1] h-[90px] w-[91px] bg-white shadow-bw-shadow-2',
      'right-[94px] top-[-70px]',
      'md:right-0 md:top-[-76px]',
      'lg:top-[-80px]',
    )}
  />
);

const MyAccountFlyoutUserInfo: React.FC<Pick<MyAccountFlyoutProps, 'user'>> = ({
  user,
}) => (
  <p className="flex-1">
    Hallo <span className="font-semibold">{user?.userName}</span>
    {user?.customerId && (
      <>
        <br />
        BayWa Kunden-Nr.: {user?.customerId}
      </>
    )}
  </p>
);

const MyAccountFlyoutHeader: React.FC<Pick<MyAccountFlyoutProps, 'urls'>> = ({
  urls,
}) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center justify-start">
      <BaywaIcon
        className="text-secondary-stone-grey-400"
        icon="icon-ebusiness-user"
      />
      <span className="ml-a text-22 font-semibold leading-32">Mein Konto</span>
    </div>
    <LinkOrAnchor
      to={urls.logoutUrl}
      as="a"
      className="text-primary-nature-green-600"
    >
      Abmelden
    </LinkOrAnchor>
  </div>
);
const MyAccountFlyout: React.FC<MyAccountFlyoutProps> = ({user, urls}) => {
  return (
    <div
      className={clsx(
        'fixed left-0 top-j z-flyout flex min-h-[200px] w-full flex-col bg-white text-16 shadow-bw-shadow-3 md:top-[86px]',
        'md:absolute md:left-[unset] md:right-0 md:top-[calc(100%_+_16px)] md:w-[290px]',
      )}
    >
      <div className="flex flex-1 flex-col gap-c bg-white p-b">
        <MyAccountFlyoutHeader urls={urls} />
        <MyAccountFlyoutUserInfo user={user} />
        <Button
          text="Mein Konto anzeigen"
          clickHandler={() => window.open(urls.myAccountUrl)}
        />
      </div>
      <MyAccountMenuHighlight />
    </div>
  );
};

const MyAccountButton: React.FC<MyAccountButtonProps> = ({
  isAuthenticated,
  user,
  urls,
}) => {
  const [showFlyout, setShowFlyout] = useState<boolean>(false);

  const doShowFlyout = () => setShowFlyout(true);
  const doHideFlyout = () => setShowFlyout(false);

  return isAuthenticated ? (
    <MetaIconButtonLink
      className="menu-icon-button w-[91px]"
      linkClassName={clsx({'static z-[9999]': showFlyout})}
      icon="icon-ebusiness-my-account-logged-in"
      name="Mein Konto"
      onBlur={doHideFlyout}
      onFocus={doShowFlyout}
      onMouseEnter={doShowFlyout}
      onMouseLeave={doHideFlyout}
      as="div"
    >
      {showFlyout && <MyAccountFlyout user={user} urls={urls} />}
    </MetaIconButtonLink>
  ) : (
    <MetaIconButtonLink
      url={urls.loginUrl}
      icon="icon-ebusiness-user"
      name="Mein Konto"
    />
  );
};

export {
  MyAccountButton,
  type MyAccountButtonProps,
  type MyAccountUser,
  type MyAccountUrl,
};