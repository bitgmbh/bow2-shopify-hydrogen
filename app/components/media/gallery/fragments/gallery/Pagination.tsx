import React, { FC, useCallback, useMemo } from 'react';
import { useProductMediaGalleryStore } from '~/components/media/gallery/product-media-gallery-store';
import clsx from 'clsx';
import { type Media } from '~/service/media/product-media-service';
import { useShallow } from 'zustand/react/shallow';

interface PaginationProps {
  media: Media[];
}

export const Pagination: FC<PaginationProps> = ({ media }) => {
  const [activeSlideIdx, setActiveSlideIdx] = useProductMediaGalleryStore(
    useShallow((state) => [state.activeSlideIdx, state.setActiveSlideIdx])
  );
  const updateActiveSlideIdx = useCallback((index: number) => () => setActiveSlideIdx(index), [setActiveSlideIdx]);
  const currentSlideIdx = useMemo(() => activeSlideIdx, [activeSlideIdx]);

  return (
    <div className="mx-auto md:hidden">
      <ul className="flex gap-a flex-wrap">
        {media.map((media, index) => (
          <li key={index}>
            <button
              aria-label={`Wechseln zu ${media.content.description}`}
              data-testid={`product-gallery-pagination-idx-${index}`}
              type="button"
              onClick={updateActiveSlideIdx(index)}
              className={clsx(
                'size-[12px] rounded-full',
                currentSlideIdx === index ? 'bg-primary-nature-green-600' : 'bg-secondary-stone-grey-300'
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
