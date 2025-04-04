import {Portal} from '~/components/page/Header/PortalSwitcher';

const PortalSwitcherLinks: Portal[] = [
  {
    icon: 'icon-ebusiness-agrar-absprung',
    current: true,
    name: 'Landwirtschaft',
    to: '/',
  },
  {
    icon: 'icon-ebusiness-baustoffe-absprung',
    name: 'Baustoffe',
    to: 'https://www.baywa-baustoffe.de/b2c/de/',
  },
  {
    icon: 'icon-ebusiness-energie-absprung',
    name: 'Energie',
    to: 'https://www.baywa.de/waerme_strom/heizoel/heizoelpreisrechner/suche/heizoel',
  },
];

export {PortalSwitcherLinks};