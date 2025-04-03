import React from 'react';

interface DescriptionProps {
  headline: string;
  text: string;
}

export const Description: React.FC<DescriptionProps> = ({ headline, text }) => (
  <>
    <h4 className="font-semibold text-16 leading-24 mb-a">{headline}</h4>
    <div
      className="[&>ul]:list-[square] [&>ul]:pl-c [&>ul]:my-b mb-b md:mb-c"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  </>
);
