import clsx from 'clsx';

// @ts-expect-error @headlessui/react incompatibility with node16 resolution
import { Disclosure, Transition } from '@headlessui/react';

import PortableText from '../portableText/PortableText.client';
import { LayoutPanel } from './LayoutPanel.client';

import type {SanityFeaturePanel} from '../../types';
type Props = {
  data: SanityFeaturePanel;
  index: number;
};

export const FeaturePanel = ({data, index}: Props) => {
  return (
    <LayoutPanel index={index} panelType="introduction" panel={data}>
      <>
        <Disclosure.Button className="group  py-2">
          <div className="u-text--inverted">
            <h1 className="c-section__title">{data.title}</h1>
          </div>
          <div className="absolute  inset-x-0  flex justify-center text-white  drop-shadow-[0_0_0.25rem_rgb(0_0_0_/_0.9)]  duration-200  group-hover:translate-y-0  group-hover:scale-110  group-hover:transition-transform">
            <svg
              version="1.1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 64 64"
              className="h-16  stroke-white"
            >
              <g>
                <polyline
                  strokeWidth="2"
                  strokeLinejoin="bevel"
                  strokeMiterlimit="10"
                  points="15,24 32,41 49,24"
                ></polyline>
              </g>
            </svg>
          </div>
        </Disclosure.Button>
        <div data-section-content className="w-full">
          <Transition
            enter="transition duration-1000 ease-out"
            enterFrom="opacity-0"
            enterTo="delay-1000 opacity-100"
            leave="transition duration-1000 ease-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            unmount={false}
          >
            <Disclosure.Panel unmount={false}>
              <div className="flex  justify-center">
                <div className="max-w-2xl  rounded-2xl  border  border-white  bg-white/75  p-6  shadow-lg  backdrop-blur-md  lap:p-8  lap-wide:max-w-3xl  desk:p-10">
                  <div className="prose  prose-stone  mt-4  prose-h2:mb-2  lap:prose-lg  lap:prose-h2:mb-2">
                    {data.body && (
                      <PortableText className={clsx('')} blocks={data.body} />
                    )}
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </div>
      </>
    </LayoutPanel>
  );
};
