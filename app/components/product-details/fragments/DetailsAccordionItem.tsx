import { AccordionItem, type AccordionItemProps } from '@bitgmbh/ebiz-react-components';
import { useLocation } from '@remix-run/react';
import React, { useEffect, useState } from 'react';

interface DetailsAccordionItemProps extends AccordionItemProps {}

export const DetailsAccordionItem: React.FC<DetailsAccordionItemProps> = ({
  title,
  anchorId,
  initiallyOpen = false,
  children,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (anchorId) {
      setOpen(location.hash === `#${anchorId}`);
    }
  }, [anchorId, location.hash]);

  return (
    <AccordionItem variant="large" title={title} anchorId={anchorId} initiallyOpen={open || initiallyOpen} {...props}>
      {children}
    </AccordionItem>
  );
};
