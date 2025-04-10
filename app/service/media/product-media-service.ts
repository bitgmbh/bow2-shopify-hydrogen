import {BOW2ProductVariant, type Image, type Video} from '@bitgmbh/npm-pubsub';

export type Media = {
  type: 'image' | 'video';
  content: Image | Video;
};
export const MISSING_ARTICLE_IMG_URL =
  'https://res.cloudinary.com/baywa-ag-p/image/upload/d_missing_article.jpg/q_auto:good/c_scale,w_173,c_pad,b_white,g_center,f_auto/missing_article.jpg';
export const transformImageUrl = (
  imgUrl: string | undefined,
  width: number,
) => {
  if (!imgUrl) {
    return '';
  }
  const url = new URL(imgUrl);
  url.searchParams.set('width', width.toString());
  return url.toString();
};
/**
 * Merges the list of images and videos into a list in which every odd element is an image and every even element is a video
 * @param product The product
 */
export const mergeProductMedia = (product: BOW2ProductVariant) => {
  const {images, videos} = product;
  const imageLength = images?.length ?? 0;
  const videoLength = videos?.length ?? 0;

  let imgIdx = 0;
  let videoIdx = 0;
  const media: Media[] = [];
  while (imgIdx < imageLength || videoIdx < videoLength) {
    // Odd index: Prefer image first, then video
    if (imgIdx < imageLength) {
      media.push({
        type: 'image',
        content: images![imgIdx],
      });
      imgIdx++;
    }

    // Even index: Prefer video first, then image
    if (videoIdx < videoLength) {
      media.push({
        type: 'video',
        content: videos![videoIdx],
      });
      videoIdx++;
    }
  }

  return {
    media,
    hasMultipleMedia: media.length > 1,
  };
};