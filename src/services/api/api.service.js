import { DEV_HTTP_NETWORK_URL } from '@constants/global.constants';
class APIService {
  constructor() {
    this.url = DEV_HTTP_NETWORK_URL;
  }

  setUrl(url) {
    this.url = url;
  }
}

export default new APIService();
