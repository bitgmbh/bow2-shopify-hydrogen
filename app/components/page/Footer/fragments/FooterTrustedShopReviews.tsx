import React from 'react';
import {FooterContentGroup} from '~/components/page/Footer/fragments/FooterContentGroup';
import {Script} from '@bitgmbh/ebiz-react-components';
import {TrustedShop} from '~/components/data/trusted-shop';

export interface FooterTrustedShopReviewsProps {}

export const FooterTrustedShopReviews: React.FC<
  FooterTrustedShopReviewsProps
> = () => (
  <FooterContentGroup>
    <strong>{TrustedShop.headline}</strong>
    <div className="mt-b min-h-[170px]">
      <Script
        src="https://integrations.etrusted.com/applications/widget.js/v2"
        async={true}
      />
      <etrusted-widget data-etrusted-widget-id={TrustedShop.tsWidgetId} />
    </div>
  </FooterContentGroup>
);