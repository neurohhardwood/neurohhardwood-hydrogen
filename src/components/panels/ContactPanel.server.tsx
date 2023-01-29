// @ts-expect-error @headlessui/react incompatibility with node16 resolution
import type {SanityContactPanel} from '../../types';

import 'lazysizes';
import {LayoutPanel} from './LayoutPanel.client';

type Props = {
  data: SanityContactPanel;
  index: number;
};

export const ContactPanel = ({data, index}: Props) => {
  return (
    <LayoutPanel index={index} panel={data}>
      <div className="u-text--inverted">
        <h1 className="c-section__title">{data.title}</h1>
      </div>
      <div className="relative">
        <div className="prose-xl  prose  prose-invert  flex  justify-center  text-center  prose-p:text-white  lap-wide:prose-2xl  lap-wide:prose-p:text-white">
          <p>{data.body}</p>
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
    </LayoutPanel>
  );
};
