const {
  CLIENT_URL,
  BACKEND_API,
  STATIC_DOMAIN,
  IS_PROD,
  ENVIRONMENT,
  SENTRY_DSN,
  NETWORKS,
  EXPLORER_URLS,
  API_URLS,
  DEFAULT_NETWORK,
  EXCHANGE_API,
  IMGIX_URL,
  REWARD_CONTRACT_ADDRESSES,
  DEFAULT_WEB3_URL,
  WEB3_URLS,
  MONA_TOKEN_ADDRESSES,
  DIGITAL_MARKETPLACE_ADDRESSES,
  TIME_INTERVAL,
  USDT_ADDRESS,
  QUICKSWAP_ROUTER,
} = require('config');
const withImages = require('next-images');

module.exports = withImages({
  publicRuntimeConfig: {
    BACKEND_API,
    STATIC_DOMAIN,
    CLIENT_URL,
    IS_PROD,
    ENVIRONMENT,
    SENTRY_DSN,
    NETWORKS,
    EXPLORER_URLS,
    API_URLS,
    DEFAULT_NETWORK,
    EXCHANGE_API,
    IMGIX_URL,
    REWARD_CONTRACT_ADDRESSES,
    DEFAULT_WEB3_URL,
    WEB3_URLS,
    MONA_TOKEN_ADDRESSES,
    DIGITAL_MARKETPLACE_ADDRESSES,
    TIME_INTERVAL,
    USDT_ADDRESS,
    QUICKSWAP_ROUTER,
  },
  trailingSlash: true,
  assetPrefix: '/',
  webpack(cfg, { isServer }) {
    const originalEntry = cfg.entry;
    cfg.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
        entries['main.js'].unshift('./polyfills.js');
      }
      return entries;
    };

    if (!isServer) {
      cfg.node = {
        ws: 'empty',
      };
    }

    return cfg;
  },
});
