import { BOW2ProductVariant } from '@bitgmbh/npm-pubsub';
import { HtmlLinkDescriptor } from '@remix-run/react';
import { BreakpointImageSizes, buildImageSrcSizes } from '@bitgmbh/ebiz-utils';
import { transformImageUrl } from '~/service/media/product-media-service';

export enum ProductBreakpointImgWidth {
  sm = 343,
  md = 338,
  lg = 454,
  xl = 574,
}

export const ProductBreakpointImageSizes: BreakpointImageSizes = [
  ['xl', ProductBreakpointImgWidth.xl],
  ['lg', ProductBreakpointImgWidth.lg],
  ['md', ProductBreakpointImgWidth.md],
  ['sm', ProductBreakpointImgWidth.sm],
];

const buildPreloadDetailImageLink = (product: BOW2ProductVariant): HtmlLinkDescriptor | undefined => {
  const primaryImage = product.images.find((img) => img.isPrimary);
  if (!primaryImage) {
    return;
  }
  const primaryImgUrl = transformImageUrl(primaryImage.url, ProductBreakpointImgWidth.sm);

  const { srcSet, sizes } = buildImageSrcSizes(primaryImgUrl, ProductBreakpointImageSizes);

  return {
    as: 'image',
    href: primaryImgUrl,
    imageSizes: sizes,
    imageSrcSet: srcSet,
    rel: 'preload',
  };
};

export const buildProductPageHeadLinks = (product: BOW2ProductVariant): HtmlLinkDescriptor[] => {
  const links: HtmlLinkDescriptor[] = [];
  const preloadDetailImgLink = buildPreloadDetailImageLink(product);
  preloadDetailImgLink && links.push(preloadDetailImgLink);

  return links;
};
