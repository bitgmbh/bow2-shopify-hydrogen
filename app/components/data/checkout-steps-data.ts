export const CheckoutStepsData = [
  {
    label: 'Mein Warenkorb',
    url: '/cart',
    stepKey: 'cart'
  },
  {
    label: 'Anmelden und individuelle Preise sehen',
    url: '',
    stepKey: 'sign-in'
  },
  {
    label: 'Prüfen und Absenden',
    url: '/checkout/check',
    stepKey: 'check'
  },
  {
    label: 'Bezahlen',
    url: '',
    stepKey: 'pay'
  },
  {
    label: 'Danke',
    url: '',
    stepKey: 'thank-you'
  }
] as const
export type CheckoutStepKey = (typeof CheckoutStepsData)[number]['stepKey']
export type CheckoutStepType = (typeof CheckoutStepsData)[number]
