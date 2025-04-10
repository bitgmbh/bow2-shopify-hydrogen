import React, {FC} from 'react';
import {transformImageUrl} from '~/service/media/product-media-service';
import type {Image as ImageType} from '@shopify/hydrogen/storefront-api-types';
import {Image} from '@bitgmbh/ebiz-react-components';

interface ThumbnailImageProps {
  image: ImageType;
}

const THUMBNAIL_IMAGE_WIDTH = 56;

export const ThumbnailImage: FC<ThumbnailImageProps> = ({image}) => (
  <Image
    alt={image.altText ?? ''}
    src={transformImageUrl(image.url, THUMBNAIL_IMAGE_WIDTH)}
    aspectRatio="4:3"
    className="w-full"
    objectFit="contain"
    draggable="false"
  />
);