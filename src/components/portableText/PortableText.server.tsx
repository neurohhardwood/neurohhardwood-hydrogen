import clsx from 'clsx';

import BlockContent from '@sanity/block-content-to-react';

import LinkEmailAnnotation from './annotations/LinkEmail';
import LinkExternalAnnotation from './annotations/LinkExternal';
import LinkInternalAnnotation from './annotations/LinkInternal';
import LinkTelephoneAnnotation from './annotations/LinkTelephone';
import Block from './blocks/Block';
import ListBlock from './blocks/List';

import type {Block as SanityBlock} from '@sanity/types';
import type {SanityColorTheme} from '../../types';
type Props = {
  blocks: SanityBlock[];
  className?: string;
  centered?: boolean;
  colorTheme?: SanityColorTheme;
};

export default function PortableText({
  blocks,
  centered,
  className,
  colorTheme,
}: Props) {
  return (
    <BlockContent
      blocks={blocks}
      className={clsx('portableText', className)}
      renderContainerOnSingleChild
      serializers={{
        // Lists
        list: ListBlock,
        // Marks
        marks: {
          annotationLinkEmail: LinkEmailAnnotation,
          annotationLinkTelephone: LinkTelephoneAnnotation,
          annotationLinkExternal: LinkExternalAnnotation,
          annotationLinkInternal: LinkInternalAnnotation,
        },
        // Block types
        types: {
          block: Block,
        },
      }}
    />
  );
}
