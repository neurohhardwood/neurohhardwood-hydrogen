import 'lazysizes';

import clsx from 'clsx';

import { LayoutPanel } from '../panels/LayoutPanel.client';
import PortableText from '../portableText/PortableText.server';

import type {SanityIntroductionPanel} from '../../types';
type Props = {
  data: SanityIntroductionPanel;
  index: number;
};

export const IntroductionPanel = ({data, index}: Props) => {
  return (
    <LayoutPanel index={index} panelType="introduction" panel={data}>
      <>
        <div className="u-text--inverted">
          <h1 className="c-section__title">{data.title}</h1>
        </div>
        <div className="relative">
          <div className="lap-wide:prose-2xl  lap-wide:prose-p:text-white  prose  prose-xl  prose-invert  flex  justify-center  text-center  prose-p:text-white">
            {data.body && (
              <PortableText
                className={clsx(
                  'text-center  text-lg  font-medium  lap:text-xl desk:text-2xl',
                )}
                blocks={data.body}
              />
            )}
          </div>
          <div className="icon--bounce  absolute  inset-x-0  flex  justify-center  text-white">
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
                  points="15,24 32,41
  49,24 	"
                ></polyline>
              </g>
            </svg>
          </div>
        </div>
      </>
    </LayoutPanel>
  );
};
