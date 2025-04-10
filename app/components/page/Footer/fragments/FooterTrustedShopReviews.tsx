import React from 'react';
import {FooterContentGroup} from '~/components/page/Footer/fragments/FooterContentGroup';
import {TrustedShop} from '~/components/data/trusted-shop';
import {Script} from '~/components/base/Script';

export interface FooterTrustedShopReviewsProps {}

export const FooterTrustedShopReviews: React.FC<
  FooterTrustedShopReviewsProps
> = () => (
  <FooterContentGroup containerClassName="!mb-0">
    <strong>{TrustedShop.headline}</strong>
    <div className="mt-b min-h-[170px]">
      <Script
        src="https://integrations.etrusted.com/applications/widget.js/v2"
        id="trusted-shop-reviews"
        async={true}
      />
      <etrusted-widget data-etrusted-widget-id={TrustedShop.tsWidgetId} />
    </div>
  </FooterContentGroup>
);