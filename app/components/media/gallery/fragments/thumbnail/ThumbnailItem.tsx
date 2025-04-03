import React, {memo} from 'react';
import clsx from 'clsx';
import {ThumbnailImage} from '~/components/media/gallery/fragments/thumbnail/ThumbnailImage';
import type {MediaImage} from '@shopify/hydrogen/storefront-api-types';

interface ThumbnailMediumProps {
  medium: MediaImage;
}

const ThumbnailMedium = memo(({medium}: ThumbnailMediumProps) => (
  <ThumbnailImage key={medium?.image?.url ?? ''} image={medium.image} />
));

ThumbnailMedium.displayName = 'ThumbnailMedium';

interface ThumbnailItemProps {
  index: number;
  isActive: boolean;
  medium: MediaImage;
  changeIndex: (idx: number) => void;
}

export const ThumbnailItem = memo(
  ({index, isActive, medium, changeIndex}: ThumbnailItemProps) => {
    const updateIndex = () => changeIndex(index);
    return (
      <button
        key={medium.id}
        className={clsx(
          'border flex items-center justify-center not-has-img shrink-0 basis-g',
          {
            'border-primary-nature-green-600': isActive,
            'border-transparent': !isActive,
          },
        )}
        data-testid={`thumbnail-item-${index}`}
        aria-label={`Springe zu Bild / Video #${index}`}
        type="button"
        name={`Zu Bild ${index} wechseln`}
        onClick={updateIndex}
        onMouseEnter={updateIndex}
        onFocus={updateIndex}
        tabIndex={0}
      >
        <ThumbnailMedium medium={medium} />
      </button>
    );
  },
);
ThumbnailItem.displayName = 'ThumbnailItem';