import {
  SimpleTable,
  type SimpleTableEntries,
} from '@bitgmbh/ebiz-react-components';
import React from 'react';
import {DetailsHeadline} from '~/components/product-details/fragments/DetailsHeadline';

interface TableProps {
  headline?: string;
  subline?: string;
  entries: SimpleTableEntries;
}

export const Table: React.FC<TableProps> = ({headline, subline, entries}) => (
  <section className="mb-b md:mb-c">
    {headline && <DetailsHeadline>{headline}</DetailsHeadline>}
    {subline && <p className="mb-a">{subline}</p>}
    <SimpleTable entries={entries} />
  </section>
);