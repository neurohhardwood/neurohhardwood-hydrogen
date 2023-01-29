// @ts-expect-error incompatibility with node16 resolution
import type {PortableTextBlock} from '@portabletext/types';
import type {SanityModuleImage} from '../../../types';
import {ImageModule} from '~/components/index.server';

type Props = {
  node: PortableTextBlock & SanityModuleImage;
};

export default function ImageBlock({node}: Props) {
  return <ImageModule key={node._key} module={node} />;
}
