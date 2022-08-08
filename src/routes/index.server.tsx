import {type HydrogenRouteProps, Image, Seo} from '@shopify/hydrogen';
import clsx from 'clsx';
import groq from 'groq';
import {Section} from '~/components/section.client';
import useSanityQuery from '~/hooks/useSanityQuery';

export default function Homepage({params}: {params?: HydrogenRouteProps}) {
  const {handle, subpagehandle} = params;

  const {data: entry} = useSanityQuery<SanityHomePage>({
    query: QUERY_SANITY_HOMEPAGE,
  });

  console.log(entry);

  if (!entry) {
    // @ts-expect-error <NotFound> doesn't require response
    return <h1>Not Found</h1>;
  }

  return (
    <div>
      {entry.panels.map((panel, indexZero) => {
        const index = indexZero + 1;
        return <Section panel={panel} index={index} key={panel._id} />;
      })}
    </div>
  );
}

const QUERY_SANITY_HOMEPAGE = groq`
*[_type == 'home'][0]{
  ...,
  panels[]-> {
    ...
  }
}
`;
