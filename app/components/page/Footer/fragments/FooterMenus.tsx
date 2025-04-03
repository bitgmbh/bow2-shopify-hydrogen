import React from 'react';
import {FooterContentGroup} from '~/components/page/Footer/fragments/FooterContentGroup';
import clsx from 'clsx';
import {LinkOrAnchor} from '@bitgmbh/ebiz-react-components';
import {FooterMenus as FooterMenusData} from '~/components/data/footer.menus';

interface SubMenu {
  text: string;
  link: string;
  linkTarget: string;
}

type Breakpoints = 'xs' | 'md' | 'lg';

interface Menu {
  text: string;
  linkTarget: string;
  visibleForBreakpoints: Array<Breakpoints>;
  subMenuItems: SubMenu[];
}

interface FooterMenusProps {}

const FooterMenu: React.FC<Menu> = ({
  text,
  subMenuItems,
  visibleForBreakpoints,
}) => {
  return (
    <div
      className={clsx('flex-auto', {
        'sm:hidden': !visibleForBreakpoints.includes('xs'),
        'sm:block': visibleForBreakpoints.includes('xs'),
        'md:block': visibleForBreakpoints.includes('md'),
        'lg:block': visibleForBreakpoints.includes('lg'),
      })}
    >
      <strong>{text}</strong>
      <ul className="mt-a">
        {subMenuItems.map(({text, link, linkTarget}) => (
          <li key={text} className="md:py-a">
            <LinkOrAnchor
              to={link}
              target={linkTarget}
              rel="noopener"
              title={text}
              className="hyphens-auto break-words font-normal no-underline"
            >
              {text}
            </LinkOrAnchor>
          </li>
        ))}
      </ul>
    </div>
  );
};
const FooterMenus: React.FC<FooterMenusProps> = () => {
  return (
    <FooterContentGroup className="align-center flex items-start justify-center gap-c">
      {FooterMenusData.map((menu) => (
        <FooterMenu key={menu.text} {...menu} />
      ))}
    </FooterContentGroup>
  );
};

export {FooterMenus, type FooterMenusProps, type Menu};