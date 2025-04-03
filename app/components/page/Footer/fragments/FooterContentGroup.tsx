import React from 'react';
import clsx from 'clsx';
import ContainerFluid from '~/components/ContainerFluid';

interface FooterGroupProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}

const FooterContentGroup: React.FC<FooterGroupProps> = ({
  children,
  containerClassName,
  className,
}) => {
  return (
    <ContainerFluid className={containerClassName}>
      <div
        className={clsx(
          'border-t border-solid border-secondary-stone-grey-300 py-d md:py-e',
          className,
        )}
      >
        {children}
      </div>
    </ContainerFluid>
  );
};

export {FooterContentGroup, type FooterGroupProps};