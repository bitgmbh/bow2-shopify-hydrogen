import {
  ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
} from '@shopify/remix-oxygen';
import {getWishlist, setWishlist} from '~/utils/wishlist';
import {useLoaderData} from '@remix-run/react';
import {ProductVariant} from '@shopify/hydrogen-react/storefront-api-types';

export const action = async ({request}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const variantId = formData.get('variantId');
  if (typeof variantId !== 'string') {
    return new Response('Invalid variant id', {status: 400});
  }

  const wishlist = await getWishlist(request);
  const updatedWishlist = wishlist.includes(variantId)
    ? wishlist.filter((id) => id !== variantId)
    : [...wishlist, variantId];

  const cookie = await setWishlist(updatedWishlist);
  return data({wishlist}, {headers: {'Set-Cookie': cookie}});
};
export const loader = async ({request, context}: LoaderFunctionArgs) => {
  const {storefront} = context;
  const wishlist = await getWishlist(request);

  const {nodes: variants} = await storefront.query(VARIANTS_BY_ID_QUERY, {
    variables: {
      ids: wishlist,
    },
  });

  return {variants};
};

interface WishlistItemProps {
  variant: Omit<ProductVariant, 'metafields'>;
}

const WishlistItem = ({variant}: WishlistItemProps) => (
  <div className="grid auto-rows-min grid-cols-1">
    <img src={variant.image?.url} alt={variant.title} />
    <h3>{variant.title}</h3>
  </div>
);
export default function Wishlist() {
  const {variants} = useLoaderData<typeof loader>();

  return (
    <div className="grid grid-cols-4">
      {variants.map(
        (variant, index) =>
          variant && (
            <WishlistItem
              key={variant.id}
              variant={variant as ProductVariant}
            />
          ),
      )}
    </div>
  );
}

export const VARIANTS_BY_ID_QUERY = `#graphql 
  query VariantsById($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on ProductVariant {
        id
        title
        sku
        price {
          amount
          currencyCode
        }
        image {
          url
          altText
        }
        product {
          id
          title
          handle
        }
      }
    }
  }
` as const;