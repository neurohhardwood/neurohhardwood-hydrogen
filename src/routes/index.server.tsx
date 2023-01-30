import groq from 'groq';
import { FeaturePanel } from '~/components';
import { FormPanel, IntroductionPanel } from '~/components/index.server';
import useSanityQuery from '~/hooks/useSanityQuery';

import { HydrogenRouteProps, type } from '@shopify/hydrogen';

import type {SanityHomePage} from '~/types';
export default function Homepage({params}: {params?: HydrogenRouteProps}) {
  const {handle, subpagehandle} = params;

  const {data: entry} = useSanityQuery<SanityHomePage>({
    query: QUERY_SANITY_HOMEPAGE,
  });

  if (!entry) {
    // @ts-expect-error <NotFound> doesn't require response
    return <h1>Not Found</h1>;
  }

  return (
    <div>
      {entry.panels.map((panel, indexZero) => {
        const index = indexZero + 1;

        switch (panel._type) {
          case 'panel.introduction':
            return (
              <IntroductionPanel data={panel} index={index} key={panel._key} />
            );
            break;

          case 'panel.feature':
            return <FeaturePanel data={panel} index={index} key={panel._key} />;
            break;

          case 'panel.form':
            return <FormPanel data={panel} index={index} key={panel._key} />;
            break;

          default:
            break;
        }
      })}
    </div>
  );
}

const QUERY_SANITY_HOMEPAGE = groq`
*[_type == 'home'][0]{
  ...,
}
`;
