import { Price, PriceGrossNet } from '@bitgmbh/npm-pubsub';
import React from 'react';
import { formatPrice } from '../format-price';

const BulkPriceMinQuantity = 1;

interface BuyBoxBulkPricesProps {
  price: PriceGrossNet;
}

interface BulkPriceItemProps {
  price: Price;
}

const BulkPriceItem: React.FC<BulkPriceItemProps> = ({ price }) => (
  <tr>
    <td className="w-max p-a whitespace-nowrap">{`ab ${price.quantityMin || 1} ${price.packagingUnit}`}</td>
    <td className="p-a font-semibold">{formatPrice(price.price)}</td>
    <td className="w-max p-a text-accent-fire-red-600 font-semibold text-right">{price.discount ?? 'NA'}%</td>
  </tr>
);

export const BuyBoxBulkPrices: React.FC<BuyBoxBulkPricesProps> = ({ price }) => {
  const actualPrice = price.grossAP ?? price.gross;
  const relevantBulkPrices = actualPrice?.bulkPricing?.filter((bp) => bp.quantityMin >= BulkPriceMinQuantity) ?? [];

  if (!relevantBulkPrices.length) {
    return null;
  }

  return (
    <table className="table-fixed p-a border border-secondary-stone-grey-300 w-max mt-b text-14 leading-22 h-fit">
      <tbody>
        {relevantBulkPrices.map((bp, index) => (
          <BulkPriceItem key={index} price={bp} />
        ))}
      </tbody>
    </table>
  );
};
