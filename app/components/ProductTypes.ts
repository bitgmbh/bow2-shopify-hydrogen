import type {
  Metafield,
  ProductVariant,
} from '@shopify/hydrogen-react/storefront-api-types';

export interface Bow2ProductVariant extends ProductVariant {
  descriptionHtml: Metafield | null;
}