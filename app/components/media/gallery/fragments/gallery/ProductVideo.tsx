import React, {forwardRef} from 'react';
import {Video} from '@bitgmbh/ebiz-react-components';
import {Video as VideoType} from '@shopify/hydrogen-react/storefront-api-types';

interface ProductVideoProps {
  video: VideoType;
}

export const ProductVideo = forwardRef<HTMLDivElement, ProductVideoProps>(
  ({video}, ref) => (
    <div
      ref={ref}
      className="basis-full shrink-0 flex flex-col  gap-b items-start overflow-hidden aspect-square     "
    >
      {video.alt && <span className="font-semibold">{video.alt}</span>}
      <Video
        className="w-full"
        aspectRatio="4:3"
        youtubeId={video.sources!}
        hideYouTubeLogo={true}
        showFullscreenControl={true}
        showControls={true}
      />
    </div>
  ),
);
ProductVideo.displayName = 'ProductGalleryVideo';