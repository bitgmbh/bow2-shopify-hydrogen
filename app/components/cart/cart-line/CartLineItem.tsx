import React, {FC, useEffect, useState} from 'react';
import {Button, Headline, Image} from '@bitgmbh/ebiz-react-components';
import {useFetcher} from '@remix-run/react';
import {useVariantUrl} from '~/lib/variants';
import {transformImageUrl} from '~/service/media/product-media-service';
import {CartItemDetailLink} from '~/components/cart/cart-line/CartItemDetailLink';
import {QuantityChooser} from '~/components/cart/base/QuantityChooser';
import {CartForm, OptimisticCartLine} from '@shopify/hydrogen';
import type {CartApiQueryFragment} from '~../../../../storefrontapi.generated';
import {ProductPrice} from '~/components/ProductPrice';
import type {CartLineUpdateInput} from '@shopify/hydrogen/storefront-api-types';

export type CartLineType = OptimisticCartLine<CartApiQueryFragment>;

interface CartLineProps {
  line: CartLineType;
  action?: 'add' | 'set';
}

enum CartItemBreakpointImgWidth {
  sm = 68,
  md = 144,
  lg = 232,
  xl = 240,
}

export const CartLineItem: FC<CartLineProps> = ({line, action = 'set'}) => {
  const {id, merchandise} = line;
  const {product, title, image, selectedOptions} = merchandise;
  const variantUrl = useVariantUrl(product.handle, selectedOptions);
  const fetcher = useFetcher();
  const imgUrl = transformImageUrl(image?.url, CartItemBreakpointImgWidth.sm);
  const [qtyKey, setQtyKey] = useState(0);
  const [submittedQty, setSubmittedQty] = useState(-1);

  useEffect(() => {
    //If the user has entered a quantity that is greater than the stock level, the backend returns the maximum available quantity.
    if (line.quantity < submittedQty) {
      //enforce QuantityChoose to re-render with the correct quantity, in case last submitted quantity is the same quantity provided by backend Qua
      setQtyKey(+new Date());
    }
  }, [line, submittedQty]);

  const handleCartAction = (input: CartLineUpdateInput, action: string) => {
    fetcher.submit(
      {
        inputs: [input],
        action,
      },
      {method: 'post', action: '/cart'},
    );
  };
  const handleQuantityChange = (quantity: number) => {
    setSubmittedQty(quantity);
    handleCartAction({id, quantity}, CartForm.ACTIONS.LinesUpdate);
  };

  const handleDeleteItem = () =>
    handleCartAction({id}, CartForm.ACTIONS.LinesRemove);

  return (
    <article className="grid [grid-template-areas:'image_name_action''image_quantity_price'] grid-cols-[fit-content(116px)_auto_auto] grid-rows-[auto_auto] items-start px-b pb-b gap-x-c gap-y-b">
      <CartItemDetailLink
        className="[grid-area:image] h-full"
        url={variantUrl}
        title={title}
      >
        <Image
          alt={title}
          highPriority={true}
          src={imgUrl}
          draggable="false"
          aspectRatio="4:3"
          className="p-0 mx-auto h-full w-auto max-w-full object-contain select-none"
          breakpointImageSizes={[
            ['xl', CartItemBreakpointImgWidth.xl],
            ['lg', CartItemBreakpointImgWidth.lg],
            ['md', CartItemBreakpointImgWidth.md],
            ['sm', CartItemBreakpointImgWidth.sm],
          ]}
        />
      </CartItemDetailLink>
      <CartItemDetailLink
        url={variantUrl}
        title={title}
        className="[grid-area:name]"
      >
        <Headline
          level="subline"
          className="font-semibold text-16 leading-24 line-clamp-2"
        >
          {title}
        </Headline>
      </CartItemDetailLink>

      <div className="flex flex-col gap-aa self-end [grid-area:quantity] w-full">
        <QuantityChooser
          line={line}
          className="basis-e"
          disabled={fetcher.state === 'submitting'}
          key={qtyKey}
          name="quantity"
        />
      </div>
      <div className="grid grid-cols-[40px_40px] grid-rows-1 [grid-area:action] gap-aa w-fit justify-self-end">
        <Button
          aria-label="Produkt zur Wunschliste hinzufügen."
          className="size-b"
          icon="icon-ebusiness-heart"
          title="Produkt zur Wunschliste hinzufügen"
          type="button"
          variant="ghost"
        />
        <CartForm
          route="/cart"
          action={CartForm.ACTIONS.LinesRemove}
          inputs={{lineIds: [id]}}
        >
          <Button
            aria-label="Produkt aus Warenkorb entfernen."
            className="size-b"
            icon="icon-ebusiness-delete"
            title="Produkt aus Warenkorb entfernen"
            variant="ghost"
            type="submit"
          />
        </CartForm>
      </div>
      <ProductPrice
        price={line.cost.totalAmount}
        className="[grid-area:price] self-end justify-self-end  w-fit"
      />
    </article>
  );
};