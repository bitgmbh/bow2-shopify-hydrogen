import { EBizContext } from '@bitgmbh/bow2-npm-ui-components/layout';
import { Button } from '@bitgmbh/ebiz-react-components';
import { useOutletContext } from '@remix-run/react';
import { useRef } from 'react';

interface RequestAvailabilityProps {
  productId: string;
}

export default function RequestAvailability({ productId }: RequestAvailabilityProps) {
  const { csrf } = useOutletContext<EBizContext>();
  const requestAvailabilityFormRef = useRef<HTMLFormElement>(null);

  const handleSubscribeForAvailability = async () => {
    if (requestAvailabilityFormRef.current) {
      requestAvailabilityFormRef.current.submit();
    }
  };

  return (
    <form ref={requestAvailabilityFormRef} method="GET" action={`/details/subscribe-availability`} className="flex-1">
      <input type="hidden" name="productId" value={productId} />
      <Button
        className="bg-primary-nature-green-600 text-white px-a py-a rounded-full font-semibold"
        fullWidth={true}
        text="Wiederverfügbarkeit anfragen"
        type="button"
        name={`Wiederverfügbarkeit für ${productId} anfragen`}
        clickHandler={handleSubscribeForAvailability}
      >
        Wiederverfügbarkeit anfragen
      </Button>
    </form>
  );
}
