import React from 'react';
import {LinkOrAnchor, Image} from "@bitgmbh/ebiz-react-components";

const FooterTrustedShop: React.FC = () => {
  return (
    <div className="mb-c flex basis-1/2 flex-row gap-b md:mb-0">
      <LinkOrAnchor
        to="https://www.trustedshops.de/bewertung/info_X59833E9B0275DA9FD9ACAF1406C34D4B.html"
        className="h-f w-f shrink-0 grow-0 basis-f items-baseline no-underline md:h-g md:w-g md:basis-g"
      >
        <Image
          src="https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_40,y_545,h_60,w_60,f_auto/c_scale,w_35/sprite_payments"
          srcSet="https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_40,y_545,h_60,w_60,f_auto/c_scale,w_35/sprite_payments 320w,https://res.cloudinary.com/baywa-ag-p/image/upload/c_crop,x_40,y_545,h_60,w_60,f_auto/sprite_payments 2x"
          aspectRatio="auto"
          alt="Trusted Shops"
          width="56"
          height="56"
        />
      </LinkOrAnchor>
      <div>
        <strong>Geprüfte Sicherheit</strong>
        <p className="mt-aa md:mt-a">Zertifizierter Onlineshop mit Käuferschutz</p>
      </div>
    </div>
  );
};

export { FooterTrustedShop };
