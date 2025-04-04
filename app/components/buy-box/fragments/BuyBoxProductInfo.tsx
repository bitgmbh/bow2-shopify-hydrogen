import React from 'react';
import {DOMParser, XMLSerializer} from 'xmldom';
import {HtmlContent} from '~/components/product-details/fragments/HtmlContent';

interface BuyBoxProductInfoProps {
  description?: string;
}

const MIN_NUMBER_OF_ADVANTAGES_TO_SHOW = 3;

export const BuyBoxProductInfo: React.FC<BuyBoxProductInfoProps> = ({
  description,
}) => {
  const serializer = new XMLSerializer();
  const descriptionDOM = new DOMParser().parseFromString(description ?? '');
  const elements = Array.from(descriptionDOM.getElementsByTagName('h2'));

  const descriptionFragments = elements.reduce(
    (acc, node) => {
      let contentNode = node.nextSibling;
      while (contentNode && contentNode.nodeType !== 1) {
        contentNode = contentNode.nextSibling;
      }
      if (contentNode) {
        acc[node.textContent ?? ''] = [
          contentNode,
          serializer.serializeToString(contentNode),
        ];
      }
      return acc;
    },
    {} as Record<string, [ChildNode, string]>,
  );

  const [advantages, advantagesContent] = descriptionFragments['Vorteile'];
  if ((advantages.childNodes.length ?? 0) >= MIN_NUMBER_OF_ADVANTAGES_TO_SHOW) {
    return <HtmlContent text={advantagesContent} />;
  }

  const [details, detailsContent] = descriptionFragments['Details'];
  if ((details.childNodes.length ?? 0) > 0) {
    return <HtmlContent text={detailsContent} />;
  }
};