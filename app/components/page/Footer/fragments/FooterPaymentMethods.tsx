import React from 'react';
import {
  type PaymentMethod,
  PaymentMethods,
} from '~/components/data/footer.payment-methods';
import {BaywaIcon, Image, LinkOrAnchor} from '@bitgmbh/ebiz-react-components';

interface PaymentMethodProps extends PaymentMethod {}

const FooterPaymentMethod: React.FC<PaymentMethodProps> = ({
  title,
  icon,
  iconSrc,
  iconSrcSet,
  link,
}) => {
  return (
    <LinkOrAnchor to={link} title={title}>
      {icon ? (
        <BaywaIcon icon={icon} className="h-[45px] w-[70px]" />
      ) : (
        <Image
          src={iconSrc}
          srcSet={iconSrcSet}
          aspectRatio="auto"
          width="70"
          height="45"
          alt={title}
        />
      )}
    </LinkOrAnchor>
  );
};

const FooterPaymentMethods: React.FC = () => {
  return (
    <div>
      <strong>Unsere Zahlungsarten</strong>
      <div className="mt-b flex min-h-[45px] flex-wrap gap-b">
        {PaymentMethods.map((method) => (
          <FooterPaymentMethod key={method.title} {...method} />
        ))}
      </div>
    </div>
  );
};

export {FooterPaymentMethods};