import React, {forwardRef, memo} from 'react';
import {MediaImage} from '@shopify/hydrogen-react/storefront-api-types';
import {ProductImage} from '~/components/product-details/media-gallery/fragments/gallery/ProductImage';

interface ProductGalleryMediumProps {
  medium: MediaImage;
  index: number;
}

export const ProductGalleryMedium = memo(
  forwardRef<HTMLDivElement, ProductGalleryMediumProps>(
    ({medium, index}, ref) => (
      <ProductImage
        ref={ref}
        key={medium.image?.url}
        image={medium.image}
        highPriority={index === 0}
      />
    ),
  ),
);