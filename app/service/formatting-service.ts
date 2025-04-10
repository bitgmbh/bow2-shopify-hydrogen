const priceFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

export const formatNumberToPrice = (price: string) => {
  const priceAsNumber = parseFloat(price.replace(',', ''));
  if (isNaN(priceAsNumber)) return `Ungültiger Betrag: ${price}`;

  return priceFormatter.format(priceAsNumber);
};