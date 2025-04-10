import {FC} from 'react';
import {Button, Headline} from '@bitgmbh/ebiz-react-components';
import {clsx} from 'clsx';
import {OptimisticCart, useMoney} from '@shopify/hydrogen';
import {MoneyV2} from '@shopify/hydrogen/storefront-api-types';
import {useNavigate} from '@remix-run/react';
import {formatNumberToPrice} from '~/service/formatting-service';

const CartSummaryDivider = () => (
  <hr className="text-secondary-stone-grey-300 col-span-full" />
);

interface CartSummaryItemProps {
  label: string;
  price: MoneyV2;
  className?: string;
}

const CartSummaryItem: FC<CartSummaryItemProps> = ({
  label,
  price,
  className,
}) => {
  const money = useMoney(price);

  return (
    <>
      <span className={clsx('col-start-1', className)}>{label}</span>
      <span className={clsx('col-start-2 justify-self-end', className)}>
        {formatNumberToPrice(money.withoutTrailingZerosAndCurrency)}
      </span>
    </>
  );
};

interface CartSummaryProps {
  cart: OptimisticCart;
}

export const CartSummary: FC<CartSummaryProps> = ({cart}) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 auto-rows-min gap-b bg-secondary-earth-brown-100 rounded-b p-c h-fit sticky top-b self-start">
      <Headline
        className="col-span-full"
        level="h3"
      >{`Bestellübersicht ( ${cart.lines.nodes.length} Artikel )`}</Headline>
      <CartSummaryItem label="Bestellwert" price={cart.cost.subtotalAmount} />
      <CartSummaryDivider />
      <CartSummaryItem
        label="Gesamtsumme"
        price={cart.cost.totalAmount}
        className="text-22 leading-32 font-semibold"
      />
      <CartSummaryDivider />
      <Button
        className="col-span-full"
        type="submit"
        variant="primary"
        text="Zur Kasse"
        clickHandler={() => window.location.assign(cart.checkoutUrl)}
      />
    </div>
  );
};