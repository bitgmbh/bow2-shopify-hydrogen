import { Video } from '@bitgmbh/npm-pubsub';
import React, { FC, useEffect, useRef, useState } from 'react';
import { mapYoutubeIdToPreviewImage } from '@bitgmbh/ebiz-utils';
import { BaywaIcon, Image } from '@bitgmbh/ebiz-react-components';

interface ThumbnailVideoProps {
  video: Video;
}

export const ThumbnailVideo: FC<ThumbnailVideoProps> = ({ video }) => {
  const previewImage = mapYoutubeIdToPreviewImage(video.id!, video.name ?? '', 80);
  const [error, setError] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imgEle = imgRef.current;
    if (imgEle && imgEle.complete && imgEle.naturalWidth === 0) {
      setError(true);
    }
    }, []);

  if (error) {
    return null;
  }

  return (
    <div className="relative">
      <Image
        ref={imgRef}
        src={previewImage.src}
        alt={previewImage.alt ?? ''}
        aspectRatio="4:3"
        className="size-g"
        objectFit="contain"
        draggable="false"
        errorHandler={() => {
          setError(true);
        }
      }
      />
      <BaywaIcon
        className="text-white pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        icon="icon-ebusiness-play-button"
        size="size-b"
      />
    </div>
  );
};
