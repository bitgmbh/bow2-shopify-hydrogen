import {formatPrice} from '../buy-box/format-price';
import {Image} from '@bitgmbh/ebiz-react-components';
import {Link, useSearchParams} from '@remix-run/react';
import {useProductDetailContext} from '~/components/product-details/product-detail-context';
import {BOW2ProductVariantFull, ShopIdentifier} from '@bitgmbh/npm-pubsub';
import {
  MISSING_ARTICLE_IMG_URL,
  transformImageUrl,
} from '~/service/media/product-media-service';
import clsx from 'clsx';
import {PriceBadge} from '@bitgmbh/bow2-npm-ui-components/layout';
import {formatUnit} from '@bitgmbh/bow2-npm-ui-components/core';

function longestCommonSubstring(strs: string[]) {
  if (strs.length === 0) return '';
  let longestCommonSubstr = '';

  // Take the first string as reference for comparison
  const referenceStr = strs[0];

  for (let i = 0; i < referenceStr.length; i++) {
    for (let j = i + 1; j <= referenceStr.length; j++) {
      const substr = referenceStr.substring(i, j);
      if (isCommonSubstring(substr, strs)) {
        if (substr.length > longestCommonSubstr.length) {
          longestCommonSubstr = substr;
        }
      }
    }
  }

  return longestCommonSubstr;
}

function isCommonSubstring(substring: string, strs: string[]): boolean {
  for (const str of strs) {
    if (!str?.includes(substring)) {
      return false;
    }
  }
  return true;
}

const formatProductDetailUrl = (
  ns: ShopIdentifier,
  sku: string,
  showAllVariants: boolean,
) => `/details/products/${ns}:${sku}?_sav=${showAllVariants}`;

export default function AllProductVariants() {
  const {productDetails} = useProductDetailContext();
  const {allVariants} = productDetails;
  const [searchParams, setSearchParams] = useSearchParams();

  const ShowAllVariantsParam = '_sav';
  const VariantDisplayLimit = 3;
  const DefaultProductImgSize = 46;

  if (!allVariants || allVariants.length <= 1) {
    return null;
  }

  const showAllVariants = searchParams.get(ShowAllVariantsParam) === 'true';
  const onShowAllVariants = () =>
    setSearchParams((prevParams) => {
      prevParams.set(ShowAllVariantsParam, 'true');
      return prevParams;
    });

  let variants: BOW2ProductVariantFull[] = allVariants.filter(
    (v: BOW2ProductVariantFull) => v.availability?.availability !== 'none',
  );

  const variantPrices = variants.map((v) => {
    const salesPrice = v.price?.grossAP
      ? v.price.grossAP
      : (v.price?.gross ?? undefined);

    return {salesPrice, discount: v.price?.discount};
  });

  const variantsAreLimited = variants.length > VariantDisplayLimit;
  const numberOfVariants = variants.length;
  if (!showAllVariants) {
    variants = variants.slice(0, VariantDisplayLimit);
  }

  const longestNameSubstring = longestCommonSubstring(
    variants
      .map((v) => v.product!.displayName)
      .concat([productDetails.product.name]),
  );

  return (
    (variants.length ?? 0) > 0 && (
      <>
        <h6 className="text-16 font-semibold">Varianten</h6>
        <ul className="grid grid-cols-1 auto-rows-fr gap-a">
          {variants.map((v, i) => (
            <li key={i}>
              <Link
                className={clsx(
                  'grid grid-cols-[46px_8px_auto] gap-b h-full items-center no-underline text-14 p-a border rounded-a border-secondary-stone-grey-200 hover:bg-secondary-stone-grey-200',
                  {
                    'bg-secondary-stone-grey-200':
                      v.product?.sku === productDetails.product?.sku,
                  },
                )}
                to={formatProductDetailUrl(
                  productDetails.product.ns,
                  v.product!.sku,
                  showAllVariants,
                )}
                preventScrollReset={true}
              >
                <Image
                  className="max-h-j"
                  highPriority={true}
                  alt={v.product?.images[0]?.description ?? '-'}
                  src={transformImageUrl(
                    v.product?.images[0]?.url ?? MISSING_ARTICLE_IMG_URL,
                    DefaultProductImgSize,
                  )}
                  width="46"
                  breakpointImageSizes={[
                    ['xl', DefaultProductImgSize],
                    ['lg', DefaultProductImgSize],
                    ['md', DefaultProductImgSize],
                    ['sm', DefaultProductImgSize],
                  ]}
                />
                <span
                  title={
                    v?.availability?.availability === 'in_stock'
                      ? 'Produkt ist verfügbar'
                      : 'Produkt ist nicht verfügbar'
                  }
                  className={clsx('rounded-full size-a', {
                    'bg-accent-spring-green-600':
                      v?.availability?.availability === 'in_stock',
                    'bg-accent-fire-red-600':
                      v?.availability?.availability !== 'in_stock',
                  })}
                />
                <div className="grid grid-cols-1 auto-rows-min gap-aa">
                  <div className="line-clamp-2">
                    {v.product!.displayName.replace(longestNameSubstring, '') ||
                      `${v.product!.displayName}`}
                  </div>
                  <div className="flex flex-nowrap gap-a">
                    {variantPrices[i]?.salesPrice &&
                      formatPrice(variantPrices[i].salesPrice?.price)}

                    {variantPrices[i]?.salesPrice?.pricePerSalesUnit && (
                      <span className="text-14 text-secondary-stone-grey-400">
                        (
                        {formatPrice(
                          variantPrices[i].salesPrice.pricePerSalesUnit,
                        )}{' '}
                        /{' '}
                        {formatUnit(
                          variantPrices[i].salesPrice.salesUnit ?? '',
                        )}
                        )
                      </span>
                    )}
                    {(variantPrices[i]?.discount ?? 0) > 0 && (
                      <PriceBadge>-{variantPrices[i].discount}%</PriceBadge>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          ))}
          {!showAllVariants && variantsAreLimited && (
            <li>
              <button
                type="button"
                onClick={onShowAllVariants}
                className="text-14 font-normal"
              >
                alle {numberOfVariants} Varianten anzeigen...
              </button>
            </li>
          )}
        </ul>
      </>
    )
  );
}