import ImgixClient from 'imgix-core-js';
import config from '../utils/config';

export const imgixClient = new ImgixClient({
  domain: config.IMGIX_URL,
});

const replacePart = 'https://gateway.pinata.cloud/ipfs';
const replace = (url) => url.replace(replacePart, '');

export const create2KURL = (url) => imgixClient.buildURL(replace(url), { w: 2048, h: 1080, q: 75 });
export const createPreviewURL = (url) =>
  imgixClient.buildURL(replace(url), { w: 200, h: 200, q: 75 });
export const createGifURL = (url) => imgixClient.buildURL(replace(url), { w: 600, h: 600, q: 75 });
