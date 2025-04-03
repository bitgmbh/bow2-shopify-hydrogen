import {BaywaIconSelectionType} from "@bitgmbh/ebiz-react-components";

interface PaymentMethod {
  title: string;
  link: string;
  icon?: BaywaIconSelectionType;
  iconSrc: string;
  iconSrcSet?: string;
}

const PaymentMethods: PaymentMethod[] = [
  {
    title: 'Visa',
    link: 'https://www.baywa.de/de/i/footermenue/wir-helfen-ihnen/faq/#kreditkarte',
    iconSrc:
      'https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_0,y_0,h_90,w_140,f_auto/c_scale,w_70/sprite_payments',
    iconSrcSet:
      'https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_0,y_0,h_90,w_140,f_auto/c_scale,w_70/sprite_payments 320w,' +
      'https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_0,y_0,h_90,w_140,f_auto/sprite_payments 2x',
  },
  {
    title: 'Mastercard',
    link: 'https://www.baywa.de/de/i/footermenue/wir-helfen-ihnen/faq/#kreditkarte',
    iconSrc:
      'https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_0,y_90,h_90,w_140,f_auto/c_scale,w_70/sprite_payments',
    iconSrcSet:
      'https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_0,y_90,h_90,w_140,f_auto/c_scale,w_70/sprite_payments 320w,' +
      'https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_0,y_90,h_90,w_140,f_auto/sprite_payments 2x',
  },
  {
    title: 'PayPal',
    link: 'https://www.baywa.de/de/i/footermenue/wir-helfen-ihnen/faq/#paypal',
    iconSrc:
      'https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_0,y_180,h_90,w_140,f_auto/c_scale,w_70/sprite_payments',
    iconSrcSet:
      'https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_0,y_180,h_90,w_140,f_auto/c_scale,w_70/sprite_payments 320w,' +
      'https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_0,y_180,h_90,w_140,f_auto/sprite_payments 2x',
  },
  {
    title: 'Sofortüberweisung',
    link: 'https://www.baywa.de/de/i/footermenue/wir-helfen-ihnen/faq/#rechnung',
    icon: 'icon-ebusiness-sofortueberweisung',
    iconSrc: '#',
  },
  {
    title: 'Lastschrift',
    link: 'https://www.baywa.de/de/i/footermenue/wir-helfen-ihnen/faq/#lastschrift',
    iconSrc:
      'https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_0,y_270,h_90,w_140,f_auto/c_scale,w_70/sprite_payments',
    iconSrcSet:
      'https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_0,y_270,h_90,w_140,f_auto/c_scale,w_70/sprite_payments 320w,' +
      'https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_0,y_270,h_90,w_140,f_auto/sprite_payments 2x',
  },
  {
    title: 'Rechnung',
    link: 'https://www.baywa.de/de/i/footermenue/wir-helfen-ihnen/faq/#rechnung',
    iconSrc:
      'https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_0,y_360,h_90,w_140,f_auto/c_scale,w_70/sprite_payments',
    iconSrcSet:
      'https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_0,y_360,h_90,w_140,f_auto/c_scale,w_70/sprite_payments 320w,' +
      'https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_0,y_360,h_90,w_140,f_auto/sprite_payments 2x',
  },
  {
    title: 'Vorkasse',
    link: 'https://www.baywa.de/de/i/footermenue/wir-helfen-ihnen/faq/#vorkasse',
    iconSrc:
      'https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_0,y_450,h_90,w_140,f_auto/c_scale,w_70/sprite_payments',
    iconSrcSet:
      'https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_0,y_450,h_90,w_140,f_auto/c_scale,w_70/sprite_payments 320w,' +
      'https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_0,y_450,h_90,w_140,f_auto/sprite_payments 2x',
  },
];

export { PaymentMethods, type PaymentMethod };
