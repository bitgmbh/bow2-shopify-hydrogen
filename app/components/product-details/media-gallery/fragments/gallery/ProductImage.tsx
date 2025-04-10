import React, {forwardRef, useRef} from 'react';
import {
  ProductBreakpointImageSizes,
  ProductBreakpointImgWidth,
} from '~/service/product-details-service';
import {Image} from '@bitgmbh/ebiz-react-components';
import {Image as ImageType} from '@shopify/hydrogen-react/storefront-api-types';
import {transformImageUrl} from '~/service/media/product-media-service';

interface ProductImageProps {
  image: ImageType;
  highPriority: boolean;
}

const ZOOM_SCALE_FACTOR = 3;
const ZOOM_IMAGE_WIDTH = 1800;

export const ProductImage = forwardRef<HTMLDivElement, ProductImageProps>(
  ({image, highPriority}, ref) => {
    const imgRef = useRef<HTMLImageElement>(null);
    /**
     * Loads the image in a higher resolution as soon mouse enters the image area, so that user gets a much better zoom experience
     */
    const onMouseEnter = () => {
      const imgEl = imgRef.current;
      if (imgEl) {
        imgEl.removeAttribute('srcset');
        imgEl.src = imgEl.dataset.zoomImgSrc!.toString();
        imgEl.style.transformOrigin = '0px 0px 0px';
        imgEl.style.scale = ZOOM_SCALE_FACTOR.toString();
      }
    };

    /**
     * Shifts the image position relative to the mouse position
     * @param clientX The mouse x position from the mouse event
     * @param clientY The mouse y position from the mouse event
     * @param currentTarget The image container div
     */
    const onMouseMove: React.MouseEventHandler<HTMLDivElement> = ({
      currentTarget,
      clientX,
      clientY,
    }) => {
      const imgEl = imgRef.current;
      if (imgEl) {
        const {left, top} = currentTarget.getBoundingClientRect();
        const translateX =
          (-(clientX - left) * ZOOM_SCALE_FACTOR) / (ZOOM_SCALE_FACTOR / 2);
        const translateY =
          (-(clientY - top) * ZOOM_SCALE_FACTOR) / (ZOOM_SCALE_FACTOR / 2);
        imgEl.style.translate = `${translateX}px ${translateY}px`;
      }
    };

    const onMouseLeave = () => {
      const imgEl = imgRef.current;
      if (imgEl) {
        imgEl.style.translate = 'unset';
        imgEl.style.scale = 'unset';
        imgEl.style.transformOrigin = 'unset';
      }
    };

    return (
      <div
        key={image.url}
        ref={ref}
        className="basis-full shrink-0 flex items-center overflow-hidden aspect-square hover:cursor-zoom-in"
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <Image
          alt={''}
          ref={imgRef}
          highPriority={highPriority}
          src={transformImageUrl(image.url, ProductBreakpointImgWidth.sm)}
          data-zoom-img-src={transformImageUrl(image.url, ZOOM_IMAGE_WIDTH)}
          draggable="false"
          className="p-0 mx-auto h-full w-auto max-w-full max-h-full object-contain select-none"
          breakpointImageSizes={ProductBreakpointImageSizes}
        />
      </div>
    );
  },
);

ProductImage.displayName = 'ProductGalleryImage';