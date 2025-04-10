import React from 'react';
import {Table} from '~/components/product-details/fragments/Table';
import {ProductDetail} from '@bitgmbh/npm-pubsub';
import {mapProductDetailsToFormattedDetails} from '@bitgmbh/bow2-npm-ui-components/layout';

interface ProductDetailsProps {
  details: ProductDetail[];
}

export const ProductDetailsTable: React.FC<ProductDetailsProps> = ({
  details,
}) => (
  <Table
    headline="Produktdetails"
    entries={mapProductDetailsToFormattedDetails(details)}
  />
);