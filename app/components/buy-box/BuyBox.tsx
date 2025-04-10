import {useProductDetailContext} from '~/components/product-details/product-detail-context';
import {BuyBoxProductInfo} from '~/components/buy-box/fragments/BuyBoxProductInfo';
import {BuyBoxHeader} from '~/components/buy-box/fragments/BuyBoxHeader';
import {BuyBoxFooter} from '~/components/buy-box/fragments/BuyBoxFooter';
import {FC} from 'react';
import clsx from 'clsx';
import {ProductPrice} from '../ProductPrice';
import {ProductForm} from '~/components/ProductForm';

interface BuyBoxProps {
  className?: string;
}

export const BuyBox: FC<BuyBoxProps> = ({className}) => {
  const {product, variant, productOptions} = useProductDetailContext();

  const {price} = variant;
  return (
    <div
      className={clsx(
        'grid gap-b auto-rows-min h-[200px] min-h-fit',
        className,
      )}
    >
      <BuyBoxHeader productVariant={variant} />
      <ProductForm productOptions={productOptions} selectedVariant={variant} />
      <BuyBoxProductInfo description={product.descriptionHtml} />

      <ProductPrice price={price!} />

      <BuyBoxFooter productVariant={variant} />
    </div>
  );
};