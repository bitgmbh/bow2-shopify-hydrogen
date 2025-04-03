import React from 'react';
import clsx from 'clsx';
import {
  BaywaIcon,
  BaywaIconSelectionType,
  LinkOrAnchor,
} from '@bitgmbh/ebiz-react-components';
import {FooterSocialMediaLinks} from '~/components/data/footer.social-media.links';

interface SocialMediaLink {
  title: string;
  icon: BaywaIconSelectionType;
  link: string;
}

const FooterSocialMediaLink: React.FC<SocialMediaLink> = ({
  title,
  link,
  icon,
}) => {
  return (
    <LinkOrAnchor to={link} title={title} className="text-black">
      <BaywaIcon icon={icon} altTitle={title} />
    </LinkOrAnchor>
  );
};

interface FooterSocialMediaProps {
  className?: string;
}

const FooterSocialMedia: React.FC<FooterSocialMediaProps> = ({className}) => {
  return (
    <div className={clsx(className)}>
      <strong>BayWa folgen</strong>
      <div className="mt-c flex min-h-c gap-c">
        {FooterSocialMediaLinks.map((link) => (
          <FooterSocialMediaLink key={link.title} {...link} />
        ))}
      </div>
    </div>
  );
};

export {FooterSocialMedia, type FooterSocialMediaProps, type SocialMediaLink};