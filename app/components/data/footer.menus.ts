import { Breakpoint } from "@bitgmbh/ebiz-utils";

export const FooterMenus = [
  {
    text: 'Unternehmen',
    linkTarget: '_self',
    visibleForBreakpoints: ['lg'] as any[], // TODO use correct type here
    subMenuItems: [
      {
        text: 'BayWa Konzern',
        link: 'https://www.baywa.com/',
        linkTarget: '_blank',
      },
      {
        text: 'BayWa Stiftung',
        link: 'https://www.baywastiftung.de/',
        linkTarget: '_blank',
      },
      {
        text: 'Karriere auf einen Blick',
        link: 'https://www.baywa.com/karriere/auf-einen-blick.html',
        linkTarget: '_blank',
      },
      {
        text: 'Nachhaltigkeit',
        link: 'https://www.baywa.com/verantwortung/auf-einen-blick.html',
        linkTarget: '_blank',
      },
    ],
  },
  {
    text: 'Unsere BayWa Marken',
    linkTarget: '_self',
    visibleForBreakpoints: ['lg'] as any[],
    subMenuItems: [
      {
        text: 'Bonimal',
        link: '/de/marken/bonimal/',
        linkTarget: '_blank',
      },
      {
        text: 'GALLU',
        link: '/de/i/gallu/',
        linkTarget: '_self',
      },
      {
        text: 'GreenTrip',
        link: '/de/marken/greentrip/',
        linkTarget: '_self',
      },
      {
        text: 'Pegus',
        link: '/de/marken/pegus/',
        linkTarget: '_blank',
      },
      {
        text: 'Planterra',
        link: 'https://www.planterra.de/',
        linkTarget: '_blank',
      },
      {
        text: 'Ringkanin',
        link: '/de/marken/ringkanin/',
        linkTarget: '_self',
      },
      {
        text: 'Sir Graham',
        link: 'https://www.sirgraham.de/',
        linkTarget: '_blank',
      },
      {
        text: 'Tectrol',
        link: 'https://www.tectrol.de/#',
        linkTarget: '_blank',
      },
    ],
  },
  {
    text: 'BayWa Leistungsportfolio',
    linkTarget: '_self',
    visibleForBreakpoints: ['md', 'lg'] as any[],
    subMenuItems: [
      {
        text: 'Pflanzenbau',
        link: '/de/i/pflanzenbau/',
        linkTarget: '_self',
      },
      {
        text: 'Tierhaltung',
        link: '/de/i/tierhaltung/',
        linkTarget: '_self',
      },
      {
        text: 'Technik',
        link: '/de/i/technik/',
        linkTarget: '_self',
      },
      {
        text: 'Mobilität',
        link: 'https://www.baywa.de/mobilitaet/',
        linkTarget: '_blank',
      },
      {
        text: 'Wärme',
        link: 'https://www.baywa.de/waerme_strom/',
        linkTarget: '_blank',
      },
      {
        text: 'Bauen & Modernisieren',
        link: 'https://www.baywa-baustoffe.de/b2c/de/public/sortimente/',
        linkTarget: '_blank',
      },
      {
        text: 'Termine & Veranstaltungen',
        link: '/de/i/termine/#/',
        linkTarget: '_self',
      },
      {
        text: 'Ölwegweiser',
        link: 'https://www.tectrol.de/de/services/oelwegweiser',
        linkTarget: '_self',
      },
    ],
  },
  {
    text: 'Online-Shop & Portale',
    visibleForBreakpoints: ['md', 'lg'] as Breakpoint[],
    linkTarget: '_self',

    subMenuItems: [
      {
        text: 'BayWa Baustoffe',
        link: 'https://www.baywa-baustoffe.de/b2c/de',
        linkTarget: '_blank',
      },
      {
        text: 'BayWa Contracting',
        link: 'https://www.baywa.de/waerme_strom/contracting/',
        linkTarget: '_blank',
      },
      {
        text: 'BayWa Haustechnik',
        link: 'https://www.baywa-haustechnik.de/',
        linkTarget: '_blank',
      },
      {
        text: 'BayWa Heizöl',
        link: 'https://www.baywa.de/waerme_strom/heizoel/heizoelpreisrechner/suche/heizoel/',
        linkTarget: '_blank',
      },
      {
        text: 'BayWa r.e.',
        link: 'https://www.baywa-re.com/de/',
        linkTarget: '_blank',
      },
      {
        text: 'Gebrauchtmaschinenbörse',
        link: 'https://www.baywaboerse.com/',
        linkTarget: '_blank',
      },
      {
        text: 'Gebrauchtmaschinen-Versteigerung',
        link: 'https://www.ab-auction.com/',
        linkTarget: '_blank',
      },
      {
        text: 'BayWa Rent',
        link: 'https://www.baywa-rent.de/',
        linkTarget: '_self',
      },
    ],
  },
  {
    text: 'Wir helfen Ihnen',
    visibleForBreakpoints: ['xs', 'md', 'lg'] as any[],
    linkTarget: '_self',

    subMenuItems: [
      {
        text: 'Häufig gestellte Fragen (FAQ)',
        link: '/de/i/footermenue/wir-helfen-ihnen/faq/',
        linkTarget: '_self',
      },
      {
        text: 'Kontakt',
        link: '/de/public/contact/',
        linkTarget: '_self',
      },
      {
        text: 'Newsletter abonnieren',
        link: '/de/newsletter/subscribe/',
        linkTarget: '_self',
      },
      {
        text: 'Rückgabe Elektro-Altgerät',
        link: '/de/i/footermenue/wir-helfen-ihnen/faq/#Elektro-Altgeraete',
        linkTarget: '_self',
      },
      {
        text: 'Rücksendung',
        link: '/de/i/footermenue/wir-helfen-ihnen/faq/#ruecksendung',
        linkTarget: '_self',
      },
      {
        text: 'Versandkosten & Lieferung',
        link: '/de/i/footermenue/wir-helfen-ihnen/faq/#Lieferung',
        linkTarget: '_self',
      },
      {
        text: 'Sicherheitsdatenblätter',
        link: 'https://www.baywa.de/datenblaetter/suche',
        linkTarget: '_blank',
      },
      {
        text: 'UN-Tests',
        link: '/datenblaetter/suche',
        linkTarget: '_blank',
      },
    ],
  },
];
