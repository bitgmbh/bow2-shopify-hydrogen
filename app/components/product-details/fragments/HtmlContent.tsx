import React from 'react';
import {DetailsHeadline} from '~/components/product-details/fragments/DetailsHeadline';
import clsx from 'clsx';

interface HeadlineTextSectionProps {
  headline?: string;
  children?: React.ReactNode;
  text?: string;
}

export const HtmlContent: React.FC<HeadlineTextSectionProps> = ({
  headline,
  children,
  text,
}) => (
  <section className="mb-b md:mb-c">
    {headline && <DetailsHeadline>{headline}</DetailsHeadline>}
    {text ? (
      <div
        dangerouslySetInnerHTML={{__html: text}}
        className={clsx(
          '[&>dl]:grid [&>dl]:grid-cols-2',
          '[&_dt]:m-0 [&_dt]:basis-1/2-with-offset [&_dt]:p-a [&_dt]:lg:px-b [&_dt]:lg:py-a [&_dt]:[&:nth-child(4n+1)]:bg-secondary-stone-grey-100',
          '[&_dd]:m-0 [&_dd]:basis-1/2-with-offset [&_dd]:p-a [&_dd]:font-semibold [&_dd]:lg:px-b [&_dd]:lg:py-a [&_dd]:[&:nth-child(4n+2)]:bg-secondary-stone-grey-100',
          '[&_ul]:list-[square] [&>ul]:pl-c [&>ul]:mb-b [&>ul]:md:mb-c',
        )}
      />
    ) : (
      <div>{children}</div>
    )}
  </section>
);