import clsx from 'clsx';

export const DEFAULT_BUTTON_STYLES = clsx([
  'flex w-full items-center justify-center  transition-colors  duration-75 rounded-md border border-transparent bg-brand-600 py-3 px-8 font-semibold text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-gray-50 disabled:opacity-20',
]);

const DEFAULT_CLASSES =
  'w-full border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';

const VARIANT_CLASSES = {
  primary:
    'bg-brand-600  text-white  hover:bg-brand-500  focus:ring-offset-white-warm focus:ring-brand-500',
  secondary:
    'bg-white  border-stone-200  hover:border-brand-300  focus:ring-offset-white-warm focus:ring-brand-500 text-brand-600  hover:bg-brand-100',
};

export const BUTTON_PRIMARY_CLASSES = `${DEFAULT_CLASSES} ${VARIANT_CLASSES.primary}`;
export const BUTTON_SECONDARY_CLASSES = `${DEFAULT_CLASSES} ${VARIANT_CLASSES.secondary}`;

export const COLLECTION_PAGE_SIZE = 12;
