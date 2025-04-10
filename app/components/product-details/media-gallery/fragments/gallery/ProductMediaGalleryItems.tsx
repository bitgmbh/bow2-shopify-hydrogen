import {createRef, FC, RefObject, useEffect, useMemo} from 'react';
import {isXs} from '@bitgmbh/ebiz-utils';
import {useShallow} from 'zustand/react/shallow';
import {useProductMediaGalleryStore} from '~/components/product-details/media-gallery/product-media-gallery-store';
import {ProductImage} from '~/components/product-details/media-gallery/fragments/gallery/ProductImage';
import {ProductGalleryMedium} from '~/components/product-details/media-gallery/fragments/gallery/ProductGalleryMedium';

export const MISSING_ARTICLE_IMG_URL =
  'https://res.cloudinary.com/baywa-ag-p/image/upload/d_missing_article.jpg/q_auto:good/c_scale,w_173,c_pad,b_white,g_center,f_auto/missing_article.jpg';

interface ProductGalleryItemsProps {
  media: MediaImage[];
  slideContainerRef: RefObject<HTMLDivElement>;
}

export const ProductMediaGalleryItems: FC<ProductGalleryItemsProps> = ({
  media,
  slideContainerRef,
}) => {
  const [activeIndex, changeIndex] = useProductMediaGalleryStore(
    useShallow((state) => [state.activeSlideIdx, state.setActiveSlideIdx]),
  );
  const mediaRefs = useMemo(
    () => media.map(() => createRef<HTMLDivElement>()),
    [media],
  );

  useEffect(() => {
    if (mediaRefs.length === 0) {
      return;
    }

    mediaRefs[activeIndex].current?.scrollIntoView({
      block: 'nearest',
      inline: 'center',
    });
  }, [mediaRefs, activeIndex]);

  //
  useEffect(() => {
    //Mobile only: Observation of slide movements and adjustment of the slide index based on the visible slide
    if (isXs()) {
      const slideObserver = new IntersectionObserver(
        (entries) => {
          const visibleSlide = entries.find((entry) => entry.isIntersecting);
          if (visibleSlide) {
            const slideIndex = mediaRefs.findIndex(
              (ref) => ref.current === visibleSlide.target,
            );
            changeIndex(slideIndex);
          }
        },
        {
          root: slideContainerRef!.current,
          threshold: 0.75,
        },
      );

      mediaRefs.forEach(({current}) => slideObserver.observe(current!));
      return () => slideObserver.disconnect();
    }
  }, [changeIndex, mediaRefs, slideContainerRef]);

  if (media.length === 0) {
    return (
      <ProductImage
        image={{
          url: MISSING_ARTICLE_IMG_URL,
        }}
        highPriority
      />
    );
  }

  return media.map((medium, index) => (
    <ProductGalleryMedium
      key={index}
      ref={mediaRefs[index]}
      medium={medium}
      index={index}
    />
  ));
};
ProductMediaGalleryItems.displayName = 'ProductGalleryItems';