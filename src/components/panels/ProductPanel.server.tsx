import {
  gql,
  Seo,
  ShopifyAnalyticsConstants,
  useLocalization,
  useRouteParams,
  useServerAnalytics,
  useShopQuery,
  ProductOptionsProvider,
} from '@shopify/hydrogen';
import type {Product} from '@shopify/hydrogen/storefront-api-types';
import {ProductDetails} from '../product/Details.client';
import type {ProductWithNodes} from '~/types';
import {PRODUCT_FIELDS} from '~/fragments/shopify/product';
import {PRODUCT_VARIANT_FIELDS} from '~/fragments/shopify/productVariant';

type ShopifyPayload = {
  product: Pick<
    Product,
    | 'handle'
    | 'id'
    | 'media'
    | 'options'
    | 'seo'
    | 'title'
    | 'variants'
    | 'vendor'
  >;
};

export const ProductPanel = ({data, index}) => {
  const sanityProduct = data.product.store;

  // Conditionally fetch Shopify document
  let storefrontProduct: ProductWithNodes | null = null;
  if (sanityProduct?.gid) {
    const {
      language: {isoCode: languageCode},
      country: {isoCode: countryCode},
    } = useLocalization();

    const {
      data: {product},
    } = useShopQuery<ShopifyPayload>({
      query: QUERY_SHOPIFY,
      variables: {
        country: countryCode,
        id: sanityProduct.gid,
        language: languageCode,
      },
    });
    storefrontProduct = product;
  }

  if (!sanityProduct || !storefrontProduct) {
    return <p>Not found</p>;
  }

  const sanitySeo = sanityProduct.seo;

  const initialVariant = storefrontProduct.variants.nodes[0];

  return (
    <ProductOptionsProvider
      data={storefrontProduct}
      initialVariantId={initialVariant?.id}
    >
      <ProductDetails
        panel={data}
        initialVariantId={initialVariant?.id}
        sanityProduct={sanityProduct}
        storefrontProduct={storefrontProduct}
        index={index}
      />
    </ProductOptionsProvider>
  );
};

const QUERY_SHOPIFY = gql`
  ${PRODUCT_FIELDS}
  ${PRODUCT_VARIANT_FIELDS}

  query product($country: CountryCode, $id: ID!, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    product: product(id: $id) {
      ...ProductFields
      media(first: 20) {
        nodes {
          ... on MediaImage {
            id
            image {
              altText
              height
              id
              url
              width
            }
            mediaContentType
          }
        }
      }
      variants(first: 250) {
        nodes {
          ...ProductVariantFields
        }
      }
    }
  }
`;
