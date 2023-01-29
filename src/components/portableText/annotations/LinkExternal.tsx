// prettier-ignore
// @ts-expect-error incompatibility with node16 resolution
import type { PortableTextBlock, PortableTextMarkDefinition } from '@portabletext/types';
import clsx from 'clsx';
import {DEFAULT_BUTTON_STYLES} from '~/constants';

type Props = PortableTextBlock & {
  mark: PortableTextMarkDefinition & {
    newWindow?: boolean;
    url: string;
    isButton: boolean;
  };
};

const LinkExternalAnnotation = ({children, mark}: Props) => {
  return (
    <span className={clsx(mark?.isButton && 'inline-flex')}>
      <a
        className={clsx(
          mark?.isButton
            ? DEFAULT_BUTTON_STYLES
            : 'inline-flex items-center underline transition-opacity duration-200  hover:opacity-60',
        )}
        style={
          mark?.isButton && {
            color: 'white',
            textDecoration: 'none',
          }
        }
        href={mark?.url}
        rel="noopener noreferrer"
        target={mark?.newWindow ? '_blank' : '_self'}
      >
        <>{children}</>
      </a>
    </span>
  );
};

export default LinkExternalAnnotation;
