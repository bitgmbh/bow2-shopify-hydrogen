import React from 'react';
import {DetailsHeadline} from '~/components/product-details/fragments/DetailsHeadline';

interface ListProps {
  headline: string;
  entries: string[] | undefined;
}

export const List: React.FC<ListProps> = ({headline, entries}) => (
  <>
    <DetailsHeadline>{headline}</DetailsHeadline>
    <ol className="list-[square] pl-c mb-b md:mb-c">
      {entries?.map((entry) => <li key={entry}>{entry}</li>)}
    </ol>
  </>
);