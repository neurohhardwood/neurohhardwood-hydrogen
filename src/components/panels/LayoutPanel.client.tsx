import clsx from 'clsx';
import React, { Fragment } from 'react';
import { SanityFeaturePanel, SanityIntroductionPanel } from '~/types';

// @ts-expect-error @headlessui/react incompatibility with node16 resolution
import { Disclosure } from '@headlessui/react';

import { SanityUrlBuilder } from '../media/SanityImage.client';

type Props = {
  panel: SanityIntroductionPanel | SanityFeaturePanel;
  index: number;
  panelType?: string;
  children: React.ReactElement;
};

export const LayoutPanel = ({panel, index, panelType, children}: Props) => {
  const isFixedPanel = index % 2 == 1;
  const isScrollPanel = index % 2 == 0;

  return (
    <Disclosure as={Fragment}>
      {({open}: {open: boolean}) => (
        <section
          className={clsx(
            'relative  z-[1]  flex  min-h-[90vh]  flex-col  justify-center  overflow-hidden  bg-sambuca-500  bg-cover  bg-center  bg-no-repeat',
            `panel-${panel._key}`,
          )}
          data-type={panelType}
          style={{
            backgroundPosition: '50% 50%',
          }}
        >
          <style>
            {`
              .panel-${panel._key},
              .panel-bg-${panel._key} {
                background-image: url('${SanityUrlBuilder({
                  src: panel.backgroundImage?.asset._ref,
                })
                  .width(1068)
                  .url()}')
              }

              @media (min-width: 736px) {
                .panel-${panel._key},
                .panel-bg-${panel._key} {
                  background-image: url('${SanityUrlBuilder({
                    src: panel.backgroundImage?.asset._ref,
                  })
                    .width(1440)
                    .url()}')
                }
              }

              @media (min-width: 1068px) {
                .panel-${panel._key},
                .panel-bg-${panel._key} {
                  background-image: url('${SanityUrlBuilder({
                    src: panel.backgroundImage?.asset._ref,
                  })
                    .width(2650)
                    .quality(80)
                    .url()}')
                }
              }
            `}
          </style>
          <div
            data-section-background
            className={clsx(
              isFixedPanel && 'c-section__background--fixed',
              isScrollPanel && 'c-section__background--scroll',
              'c-section__background  pointer-events-none  absolute  inset-0',
            )}
            style={{clip: 'rect(auto auto auto auto)'}}
          >
            <div
              data-section-background-image
              className={clsx(
                isFixedPanel && 'fixed',
                open && 'fixed',
                'c-section__background--image',
                'pointer-events-none  top-0  min-h-[100vh]  w-full  overflow-hidden  bg-cover  bg-center  bg-no-repeat',
                `panel-bg-${panel._key}`,
              )}
              style={{
                backgroundPosition: '50% 50%',
                backfaceVisibility: 'hidden',
                transform: clsx(isFixedPanel && 'translateZ(0)'),
                zIndex: -index,
              }}
            ></div>
          </div>
          <div
            data-body
            className={clsx(
              'c-section__body  flex  justify-center',
              open ? 'is-open' : 'is-closed',
              !open && 'absolute  inset-0',
            )}
            style={{
              clip: !open ? 'rect(auto auto auto auto)' : '',
            }}
          >
            <div
              data-body-wrapper
              className={clsx(
                isFixedPanel && !open && 'fixed  top-0  w-full',
                open && 'relative',
                'c-section__body--wrapper  my-20  flex  h-full  w-full  flex-col  items-center  px-6  lap:my-32  lap:px-12  desk:my-48',
              )}
              style={{
                transform: 'translateZ(0)',
                transition: 'margin-top 0.6s, margin-bottom 0.3s',
              }}
            >
              {children}
            </div>
          </div>
        </section>
      )}
    </Disclosure>
  );
};
