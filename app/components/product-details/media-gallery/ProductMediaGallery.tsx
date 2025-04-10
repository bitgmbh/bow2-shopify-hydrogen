import {FC, useRef} from 'react';
import {useProductDetailContext} from '~/components/product-details/product-detail-context';
import clsx from 'clsx';
import type {MediaImage} from '@shopify/hydrogen/storefront-api-types';
import {ProductMediaGalleryThumbnails} from '~/components/product-details/media-gallery/ProductMediaGalleryThumbnails';
import {ProductMediaGalleryItems} from '~/components/product-details/media-gallery/fragments/gallery/ProductMediaGalleryItems';

interface ProductMediaGalleryProps {
  className?: string;
}

export const ProductMediaGallery: FC<ProductMediaGalleryProps> = ({
  className,
}) => {
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const {product} = useProductDetailContext();
  const media = product.media.nodes.filter(
    (node) => node.mediaContentType === 'IMAGE',
  ) as MediaImage[];
  const hasMultipleMedia = media.length > 1;
  return (
    <div
      className={clsx(
        'grid gap-b auto-cols-fr auto-rows-max',
        {
          'md:grid-cols-[56px_auto]': hasMultipleMedia,
          'grid-cols-1': !hasMultipleMedia,
        },
        className,
      )}
      data-component="ProductMediaGallery"
    >
      {hasMultipleMedia && <ProductMediaGalleryThumbnails media={media} />}
      <div
        className="sm:overflow-x-auto md:overflow-x-hidden"
        ref={slideContainerRef}
      >
        <div className="flex max-h-full">
          <ProductMediaGalleryItems
            media={media}
            slideContainerRef={slideContainerRef}
          />
        </div>
      </div>
    </div>
  );
};