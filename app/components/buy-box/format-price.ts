export const formatPrice = (price?: number, currency = 'EUR') => {
  if (!price) {
    return '';
  }
  const formatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency,
  });

  return formatter.format(price);
};
