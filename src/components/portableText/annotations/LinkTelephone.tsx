// prettier-ignore
// @ts-expect-error incompatibility with node16 resolution
import type { PortableTextBlock, PortableTextMarkDefinition } from '@portabletext/types';
import clsx from 'clsx';
import {DEFAULT_BUTTON_STYLES} from '~/constants';

type Props = PortableTextBlock & {
  mark: PortableTextMarkDefinition & {
    telephone: string;
    isButton: boolean;
  };
};

const LinkTelephoneAnnotation = (props: Props) => {
  const {children, mark} = props;
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
        href={`tel:${mark?.telephone}`}
      >
        <>{children}</>
      </a>
    </span>
  );
};

export default LinkTelephoneAnnotation;
