import {Disclosure} from '@headlessui/react';
import clsx from 'clsx';

export const Section = ({panel, index}) => {
  return (
    <section
      className="relative  z-[1]  flex  min-h-[90vh]  flex-col  justify-center  overflow-hidden  bg-sambuca-500  bg-cover  bg-center  bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://s3.us-east-2.amazonaws.com/assets.neurohhardwood.com/photos/_deskBkg/78D52D1E-6A30-4777-8DD0-9209300FCBBE.JPG')",
        backgroundPosition: '50% 50%',
      }}
    >
      <div
        className="absolute  inset-0"
        style={{clip: 'rect(auto auto auto auto)'}}
      >
        <div
          className={clsx(
            'c-section__background--image',
            'pointer-events-none  top-0  min-h-[100vh]  w-full  overflow-hidden  bg-cover  bg-center  bg-no-repeat',
            index % 2 == 0
              ? 'c-section__background--scroll'
              : 'c-section__background--fixed  fixed',
          )}
          style={{
            backgroundImage:
              "url('https://s3.us-east-2.amazonaws.com/assets.neurohhardwood.com/photos/_deskBkg/78D52D1E-6A30-4777-8DD0-9209300FCBBE.JPG')",
            backgroundPosition: '50% 50%',
            backfaceVisibility: 'hidden',
            transform: index % 2 == 0 ? '' : 'translateZ(0)',
            zIndex: -index,
          }}
        ></div>
        <div
          className={clsx(
            index % 2 == 0 ? 'absolute  inset-0' : 'fixed  inset-0',
            'px-6',
          )}
          style={{transform: 'translateZ(0)'}}
        >
          <Disclosure
            as="div"
            className="flex  h-full  flex-col  items-center  justify-center"
          >
            <Disclosure.Button className="py-2">
              <h1 className="section-title  text-[5rem]  font-light  text-white">
                {panel.title}
              </h1>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
              Yes! You can purchase a license that you can share with your
              entire team.
            </Disclosure.Panel>
          </Disclosure>
        </div>
      </div>
    </section>
  );
};
