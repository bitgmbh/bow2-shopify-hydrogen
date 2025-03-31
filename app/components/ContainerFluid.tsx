import React from 'react'
import clsx from 'clsx'

interface ContainerFluidProps {
  className?: string
  children: React.ReactNode
}

export default function ContainerFluid({ children, className }: ContainerFluidProps) {
  return <main className={clsx('w-content mx-auto mb-j relative', className)}>{children}</main>
}
