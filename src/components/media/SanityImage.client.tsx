import clsx from 'clsx';

import imageUrlBuilder from '@sanity/image-url';

import sanityConfig from '../../../sanity.config';

const BREAKPOINTS = [512, 736, 960, 1068, 1440, 2650]; // px

export const findLastNonNullValue = (items, currentIndex) => {
  const sliced = items.slice(0, currentIndex);
  return sliced.filter((val: number) => val !== null).pop();
};

const generateSrcSet = (
  urlBuilder,
  breakpoints: Array<number>,
  {quality}: {quality: number},
) => {
  return breakpoints
    .map((width: number) => {
      return `${urlBuilder
        .width(width)
        .auto('format')
        .quality(quality)} ${width}w`;
    })
    .join(', ');
};

// Generate srcset sizes based off breakpoints
const generateSizes = (breakpoints, sizes) => {
  if (!sizes) {
    return undefined;
  }

  if (typeof sizes === 'string') {
    return sizes;
  }

  if (sizes.length === 1 && sizes[0] !== null) {
    return sizes[0];
  }

  return sizes
    .map((val, i) => {
      if (i === sizes.length - 1) {
        return sizes[i];
      }

      let current = val;
      if (val === null) {
        current = findLastNonNullValue(sizes, i);
      }

      return `(max-width: ${breakpoints?.[i]}px) ${current}`;
    })
    .join(', ');
};

/**
 * A simple image component that wraps around `@sanity/image-url`
 */
export const SanityImage = (props) => {
  const {
    blurDataURL,
    breakpoints,
    crop,
    dataset = sanityConfig.dataset,
    height,
    hotspot,
    layout,
    lqip,
    options,
    projectId = sanityConfig.projectId,
    quality = 80,
    sizes,
    src,
    urlOnly,
    width,
    ...rest
  } = props;

  if (!dataset) {
    throw new Error('SanityImage is missing required "dataset" property.');
  }
  if (!projectId) {
    throw new Error('SanityImage is missing required "projectId" property.');
  }
  if (!src) {
    return null;
  }

  // Strip out blacklisted props
  delete rest?.['decoding'];
  delete rest?.['ref'];
  delete rest?.['srcSet'];
  delete rest?.['style'];

  const urlBuilder = imageUrlBuilder({projectId, dataset}).image({
    _ref: src,
    crop,
    hotspot,
  });

  // Generate srcset + sizes
  const srcSetSizes = generateSizes(
    breakpoints ? breakpoints : BREAKPOINTS,
    sizes,
  );
  const srcSet = generateSrcSet(
    urlBuilder,
    breakpoints ? breakpoints : BREAKPOINTS,
    {quality},
  );

  // Determine image aspect ratio (factoring in any potential crop)
  let aspectRatio;
  if (height && width) {
    const multiplierWidth = 1 - (crop?.left || 0) - (crop?.right || 0);
    const multiplierHeight = 1 - (crop?.bottom || 0) - (crop?.top || 0);
    aspectRatio = (width * multiplierWidth) / (height * multiplierHeight);
  }

  let urlDefault = urlBuilder;

  // Apply props
  /*
  if (height) {
    url = url.height(options.height);
  }
  if (width) {
    url = url.width(options.width);
  }
  */

  // TODO: check for valid range
  if (options?.blur) {
    urlDefault = urlDefault
      .blur(options.blur.amount)
      .width(options.blur.width ? options.blur.width : 128);
  }
  urlDefault = urlDefault.url();

  if (lqip) {
    return (
      // eslint-disable-next-line hydrogen/prefer-image-component, jsx-a11y/alt-text
      <img
        {...rest}
        decoding="async"
        // src={blurDataURL}
        src={urlDefault}
        width="100%"
        height="auto"
        className={clsx(layout === 'fill' && 'h-full  w-full', rest.className)}
        style={{
          ...(layout === 'responsive' && {
            aspectRatio,
            width: '100%',
          }),
        }}
      />
    );
  } else {
    return (
      // eslint-disable-next-line hydrogen/prefer-image-component, jsx-a11y/alt-text
      <img
        {...rest}
        decoding="async"
        src={blurDataURL}
        // src={urlDefault}
        data-sizes={srcSetSizes}
        data-srcset={srcSet}
        width="100%"
        height="auto"
        className={clsx(
          layout === 'fill' && 'h-full  w-full',
          'blur-up',
          rest.className,
        )}
        style={{
          ...(layout === 'responsive' && {
            aspectRatio,
            width: '100%',
          }),
        }}
      />
    );
  }
};

export const SanityUrlBuilder = (props) => {
  const {
    crop,
    dataset = sanityConfig.dataset,
    height,
    hotspot,
    projectId = sanityConfig.projectId,
    src,
    width,
  } = props;

  const urlBuilder = imageUrlBuilder({projectId, dataset}).image({
    _ref: src,
    crop,
    hotspot,
  });

  return urlBuilder;
};
