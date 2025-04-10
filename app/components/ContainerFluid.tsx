import React from 'react';
import {clsx} from 'clsx';

interface ContainerFluidProps {
  className?: string;
  children: React.ReactNode;
  main?: boolean;
}

export default function ContainerFluid({
  children,
  className,
  main,
}: ContainerFluidProps) {
  const MainOrDiv = main ? 'main' : 'div';
  return (
    <MainOrDiv
      className={clsx('w-content mx-auto relative', main && 'mb-j', className)}
    >
      {children}
    </MainOrDiv>
  );
}