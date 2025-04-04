import React from 'react';
import {
  FooterSocialMedia,
  type FooterSocialMediaProps,
} from '~/components/page/Footer/fragments/FooterSocialMedia';
import {FooterContentGroup} from '~/components/page/Footer/fragments/FooterContentGroup';

interface FooterSeoTeaserProps extends FooterSocialMediaProps {}

const FooterSeoTeaser: React.FC<FooterSeoTeaserProps> = () => {
  return (
    <FooterContentGroup
      containerClassName="sm:hidden md:block"
      className="flex sm:flex-row-reverse items-start sm:justify-end gap-c md:flex-row md:justify-center"
    >
      <div className="basis-auto">
        <strong>Erleben Sie BayWa – Für die Landwirtschaft.</strong>
        <div className="mt-c">
          <p>
            Ob Tierhalter oder Ackerbauer, Lohnunternehmer oder Forstwirt: Im
            BayWa Portal finden Sie ein breites Sortiment an Futtermitteln,
            Saatgut und Pflanzenschutz – konventionell oder ökologisch – für die
            Landwirtschaft. Darüber hinaus erhalten Sie ausführliche
            Informationen rund um unsere vielfältigen Beratungsservices,
            Leistungen, Veranstaltungen und Themenwelten sowie über uns, Ihre
            BayWa.
          </p>
          <br />
          <p>Entdecken Sie unsere Vielfalt – Digital und vor Ort</p>
        </div>
      </div>
      <FooterSocialMedia className="basis-4/12" />
    </FooterContentGroup>
  );
};

export {FooterSeoTeaser};