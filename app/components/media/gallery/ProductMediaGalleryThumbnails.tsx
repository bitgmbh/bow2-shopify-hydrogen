import React, {useCallback, useRef, useState} from 'react';
import {throttle} from 'lodash-es';
import {useProductMediaGalleryStore} from '~/components/media/gallery/product-media-gallery-store';
import {BaywaIcon} from '@bitgmbh/ebiz-react-components';
import {useShallow} from 'zustand/react/shallow';
import {ThumbnailItem} from '~/components/media/gallery/fragments/thumbnail/ThumbnailItem';

interface ThumbnailNavButtonProps
  extends React.ComponentPropsWithRef<'button'> {
  direction: 'up' | 'down';
}

const ThumbnailNavButton: React.FC<ThumbnailNavButtonProps> = ({
  direction,
  ...btnProps
}) => (
  <button
    className="flex items-center justify-center transition bg-white w-full h-d text-secondary-stone-grey-300 hover:text-secondary-stone-grey-400 disabled:text-secondary-stone-grey-100"
    {...btnProps}
  >
    <BaywaIcon
      size="size-c"
      icon={
        direction === 'up'
          ? 'icon-ebusiness-arrow-up'
          : 'icon-ebusiness-arrow-down'
      }
    />
  </button>
);

interface ProductMediaGalleryThumbnailsProps {
  media: MediaImage[];
}

const SCROLLABLE_MEDIA_LENGTH = 7;
const SCROLL_POS_DETECTION_THROTTLE_MS = 100;

const ProductMediaGalleryThumbnails = ({
  media,
}: ProductMediaGalleryThumbnailsProps) => {
  const [activeIndex, changeIndex] = useProductMediaGalleryStore(
    useShallow((state) => [state.activeSlideIdx, state.setActiveSlideIdx]),
  );
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);
  const [isScrollStart, setIsScrollStart] = useState(true);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const isScrollable = media.length > SCROLLABLE_MEDIA_LENGTH;

  const onThumbsNavigate = (direction: 'up' | 'down') => () => {
    const {offsetHeight} = thumbnailsRef.current!;
    thumbnailsRef.current!.scrollBy({
      top: direction === 'up' ? -offsetHeight : offsetHeight,
      behavior: 'smooth',
    });
  };

  const onThumbsScroll = throttle(() => {
    const {offsetHeight, scrollTop, scrollHeight} = thumbnailsRef.current!;
    setIsScrollStart(scrollTop === 0);
    setIsScrollEnd(scrollTop + offsetHeight >= scrollHeight);
  }, SCROLL_POS_DETECTION_THROTTLE_MS);

  const updateIndex = useCallback(
    (index: number) => changeIndex(index),
    [changeIndex],
  );
  return (
    <div className="sm:hidden md:flex md:flex-col md:gap-a w-g">
      {isScrollable && (
        <ThumbnailNavButton
          direction="up"
          name="scrollUp"
          aria-label="Minaturansicht nach oben scrollen"
          title="Minaturansicht nach oben scrollen"
          onClick={onThumbsNavigate('up')}
          disabled={isScrollStart}
        />
      )}
      <div
        className="overflow-y-scroll scrollbar-none h-[440px] sm:hidden md:flex md:flex-col md:gap-a "
        ref={thumbnailsRef}
        onScroll={onThumbsScroll}
      >
        {media.map((medium, index) => (
          <ThumbnailItem
            key={index}
            medium={medium}
            index={index}
            isActive={index === activeIndex}
            changeIndex={updateIndex}
          />
        ))}
      </div>
      {isScrollable && (
        <ThumbnailNavButton
          direction="down"
          aria-label="Minaturansicht nach unten scrollen"
          title="Minaturansicht nach unten scrollen"
          name="scrollDown"
          onClick={onThumbsNavigate('down')}
          disabled={isScrollEnd}
        />
      )}
    </div>
  );
};

export {ProductMediaGalleryThumbnails};