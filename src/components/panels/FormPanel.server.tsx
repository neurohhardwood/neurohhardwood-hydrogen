import 'lazysizes';

import { LayoutPanel } from './LayoutPanel.client';

// @ts-expect-error @headlessui/react incompatibility with node16 resolution
import type {SanityFormPanel} from '../../types';

type Props = {
  data: SanityFormPanel;
  index: number;
};

export const FormPanel = ({data, index}: Props) => {
  return (
    <LayoutPanel index={index} panel={data}>
      <>
        <div className="u-text--inverted">
          <h1 className="c-section__title">{data.title}</h1>
        </div>
        <div className="relative">
          <div className="prose  prose-xl  prose-invert  flex  justify-center  text-center  prose-p:text-white  lap-wide:prose-2xl  lap-wide:prose-p:text-white">
            <script
              type="text/javascript"
              src="https://form.jotform.com/jsform/230288667397068"
            ></script>
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
