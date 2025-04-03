import React from 'react';

interface HeadlineProps {
  children: React.ReactNode;
}

export const DetailsHeadline: React.FC<HeadlineProps> = ({ children }) => (
  <h4 className="text-primary-nature-green-600 mb-a font-semibold text-[22px] leading-32">{children}</h4>
);
