import ProductDescription from './ProductDescription';
import {Accordion} from '@bitgmbh/ebiz-react-components';
import {ProductShippingDelivery} from '~/components/product-details/ProductShippingDelivery';
import {DetailsAccordionItem} from '~/components/product-details/fragments/DetailsAccordionItem';
import {useProductDetailContext} from '~/components/product-details/product-detail-context';
import {ProductMediaGallery} from '../media/gallery/ProductMediaGallery';
import clsx from 'clsx';
import {BuyBox} from '~/components/buy-box/BuyBox';

export default function ProductVariantPage() {
  const {product, variant} = useProductDetailContext();

  return (
    <>
      <section
        className={clsx(
          'grid auto-rows-max',
          "sm:gap-x-c sm:gap-y-b sm:grid-cols-[1fr] sm:[grid-template-areas:'gallery''aside''main']",
          "md:gap-x-d md:gap-y-c md:grid-cols-[4fr_3fr] md:[grid-template-areas:'gallery_aside''main_aside']",
        )}
      >
        <ProductMediaGallery className="col-span-7 [grid-area:gallery]" />
        <Accordion className="[grid-area:main]">
          <DetailsAccordionItem title="Produktdetails" initiallyOpen={true}>
            <ProductDescription description={product?.descriptionHtml} />
          </DetailsAccordionItem>
          <DetailsAccordionItem title="Datenblätter"></DetailsAccordionItem>
          <DetailsAccordionItem title="Produktsicherheit"></DetailsAccordionItem>
          <DetailsAccordionItem title="Versand und Lieferung">
            <ProductShippingDelivery />
          </DetailsAccordionItem>
          <DetailsAccordionItem
            anchorId="ratings"
            title="Produktbewertungen"
          ></DetailsAccordionItem>
        </Accordion>
        <BuyBox className="[grid-area:aside]" />
      </section>
    </>
  );
}