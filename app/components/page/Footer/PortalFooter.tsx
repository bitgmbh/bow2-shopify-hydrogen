import React from 'react';
import {FooterMenus} from '~/components/page/Footer/fragments/FooterMenus';
import {FooterTrustedShopReviews} from '~/components/page/Footer/fragments/FooterTrustedShopReviews';
import {FooterLinks} from '~/components/page/Footer/fragments/FooterLinks';
import {FooterSideBySide} from '~/components/page/Footer/fragments/FooterSideBySide';
import {FooterPaymentMethods} from '~/components/page/Footer/fragments/FooterPaymentMethods';
import {FooterTrustedShop} from '~/components/page/Footer/fragments/FooterTrustedShop';
import {FooterSeoTeaser} from '~/components/page/Footer/fragments/FooterSeoTeaser';
import {FooterSocialMedia} from '~/components/page/Footer/fragments/FooterSocialMedia';
import ContainerFluid from '~/components/ContainerFluid';
import {PageVariant} from '~/components/PageLayout';

interface PortalFooterProps {
  pageVariant: PageVariant;
}

const PortalFooter: React.FC<PortalFooterProps> = ({pageVariant}) => {
  return (
    <footer>
      {pageVariant === PageVariant.Standard && (
        <>
          <FooterSideBySide
            left={<FooterTrustedShop />}
            right={<FooterPaymentMethods />}
          />
          <ContainerFluid className="md:hidden !mb-0">
            <FooterSocialMedia className="basis-4/12 py-c" />
          </ContainerFluid>
          <FooterTrustedShopReviews />
          <FooterSeoTeaser />
          <FooterMenus />
        </>
      )}
      <FooterLinks />
    </footer>
  );
};

export {PortalFooter, type PortalFooterProps};