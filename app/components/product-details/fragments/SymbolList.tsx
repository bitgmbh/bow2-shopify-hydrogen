import { Image } from '@bitgmbh/ebiz-react-components';
import React from 'react';
import { DetailsHeadline } from '~/components/product-details/fragments/DetailsHeadline';

interface SymbolListProps {
  headline: string;
  symbolUrls: string[] | undefined;
}

export const SymbolList: React.FC<SymbolListProps> = ({ headline, symbolUrls }) => (
  <section className="mb-b md:mb-c">
    <DetailsHeadline>{headline}</DetailsHeadline>
    <ul className="flex gap-a">
      {symbolUrls?.map((url) => {
        const sanitizedUrl = url.replace(/(w_\d+|bo_\d+px_solid_white|c_pad|b_white),/g, '').replace(/h_\d+/, 'h_56');
        return (
          <li key={url}>
            <Image alt="Gefahrenstoffsymbol" src={sanitizedUrl} className="h-g w-auto" height="56" />
          </li>
        );
      })}
    </ul>
  </section>
);
