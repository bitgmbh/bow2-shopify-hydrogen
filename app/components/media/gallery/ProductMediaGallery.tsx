import {FC, useRef} from 'react';
import {ProductMediaGalleryItems} from '~/components/media/gallery/fragments/gallery/ProductMediaGalleryItems';
import {useProductDetailContext} from '~/components/product-details/product-detail-context';
import clsx from 'clsx';
import {ProductMediaGalleryThumbnails} from '~/components/media/gallery/ProductMediaGalleryThumbnails';
import type {MediaImage} from '@shopify/hydrogen/storefront-api-types';

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
      className={clsx('grid gap-b grid-cols-2 auto-rows-max', className)}
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