import React from 'react';
import ContainerFluid from '~/components/ContainerFluid';
import {LinkOrAnchor} from '@bitgmbh/ebiz-react-components';
import {FooterLinks as FooterLinksData} from '~/components/data/footer.links';

interface Link {
  text: string;
  link: string;
}

interface FooterLinksProps {}

const FooterLinks: React.FC<FooterLinksProps> = () => {
  return (
    <div className="min-h-i bg-black text-white">
      <ContainerFluid>
        <div className="flex md:flex-row md:justify-between md:gap-c sm:flex-col-reverse sm:items-start sm:justify-center sm:gap-a sm:py-c">
          <div className="self-baseline whitespace-nowrap text-14 font-semibold">
            © BayWa AG 2025
          </div>
          <div className="flex flex-wrap md:justify-end">
            {FooterLinksData.map(({text, link}) => (
              <LinkOrAnchor
                key={link}
                to={link}
                target="_self"
                title={text}
                className='text-14 font-normal text-white no-underline decoration-white hover:text-white [&:not(:last-child)]:after:mx-[10px] [&:not(:last-child)]:after:content-["|"]'
              >
                {text}
              </LinkOrAnchor>
            ))}
          </div>
        </div>
      </ContainerFluid>
    </div>
  );
};

export {FooterLinks, type FooterLinksProps, type Link};