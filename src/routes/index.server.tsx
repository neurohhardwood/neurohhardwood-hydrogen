import {type HydrogenRouteProps, Image, Seo} from '@shopify/hydrogen';
import clsx from 'clsx';
import groq from 'groq';
import useSanityQuery from '~/hooks/useSanityQuery';

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
        const backgroundBehavior = index % 2 == 0 ? 'scroll' : 'fixed';

        return (
          <section
            className="translate-  relative  z-[1]  flex  min-h-[90vh]  flex-col  justify-center  overflow-hidden  bg-sambuca-500  bg-cover  bg-center  bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://s3.us-east-2.amazonaws.com/assets.neurohhardwood.com/photos/_deskBkg/78D52D1E-6A30-4777-8DD0-9209300FCBBE.JPG')",
              backgroundPosition: '50% 50%',
            }}
            key={panel._id}
          >
            <div className="" data-background-type={backgroundBehavior}>
              <div
                className={clsx(
                  'pointer-events-none  top-0  min-h-[100vh]  w-full  overflow-hidden  bg-cover  bg-center  bg-no-repeat',
                  index % 2 == 0 ? 'relative' : 'fixed',
                )}
                style={{
                  backgroundImage:
                    "url('https://s3.us-east-2.amazonaws.com/assets.neurohhardwood.com/photos/_deskBkg/78D52D1E-6A30-4777-8DD0-9209300FCBBE.JPG')",
                  backgroundPosition: '50% 50%',
                  backfaceVisibility: 'hidden',
                  transform: index % 2 == 0 ? 'translateZ(0px)' : '',
                  zIndex: -index,
                }}
              ></div>

              <h1>{panel.title}</h1>
            </div>
          </section>
        );
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
