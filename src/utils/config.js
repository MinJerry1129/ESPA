import getConfig from 'next/config';

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { publicRuntimeConfig } = getConfig();

// Will be available on both server-side and client-side

export default publicRuntimeConfig;
