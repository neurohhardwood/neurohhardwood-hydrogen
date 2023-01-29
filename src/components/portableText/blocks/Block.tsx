// @ts-expect-error incompatibility with node16 resolution
import type {PortableTextBlock} from '@portabletext/types';
import clsx from 'clsx';
import {ReactNode} from 'react';

type Props = {
  children?: ReactNode;
  node: PortableTextBlock;
};

export default function Block({children, node}: Props) {
  if (node.style === 'h2') {
    return <h2 className={clsx()}>{children}</h2>;
  }

  // Pragraphs
  return (
    <p
      className={clsx(
        '', //
        'relative',
      )}
    >
      {children}
    </p>
  );
}
