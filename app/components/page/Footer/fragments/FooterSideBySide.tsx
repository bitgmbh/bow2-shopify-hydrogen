import React from 'react';
import ContainerFluid from '~/components/ContainerFluid';

interface FooterSideBySideProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const FooterSideBySide: React.FC<FooterSideBySideProps> = ({left, right}) => {
  return (
    <ContainerFluid className="py-c md:py-e">
      <div className="item-start flex sm:flex-col justify-center md:flex-row">
        <div className="basis-1/2">{left}</div>
        <div className="basis-1/2">{right}</div>
      </div>
    </ContainerFluid>
  );
};

export {FooterSideBySide, type FooterSideBySideProps};