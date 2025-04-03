import clsx from 'clsx';

interface DescriptionProps {
  description?: string;
}

export default function ProductDescription({description}: DescriptionProps) {
  return (
    description && (
      <section
        className={clsx(
          '[&>dl]:grid [&>dl]:grid-cols-2',
          '[&>dl>dt]:m-0 [&_dt]:basis-1/2-with-offset [&>dl>dt]:p-a [&>dl>dt]:lg:px-b [&>dl>dt]:lg:py-a [&>dl>dt]:[&:nth-child(4n+1)]:bg-secondary-stone-grey-100',
          '[&>dl>dd]:m-0 [&_dd]:basis-1/2-with-offset [&>dl>dd]:p-a [&>dl>dd]:font-semibold [&>dl>dd]:lg:px-b [&>dl>dd]:lg:py-a [&>dl>dd]:[&:nth-child(4n+2)]:bg-secondary-stone-grey-100',
          '[&_ul]:list-[square] [&>ul]:pl-c [&>ul]:mb-b [&>ul]:md:mb-c',
          '[&>h2]:text-primary-nature-green-600 [&>h2]:mb-a [&>h2]:font-semibold [&>h2]:text-[22px] [&>h2]:leading-32',
          'sm:mb-b md:mb-c',
        )}
        dangerouslySetInnerHTML={{__html: description ?? ''}}
      />
    )
  );
}