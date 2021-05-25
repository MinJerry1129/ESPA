import moment from 'moment';
import { SubscriptionClient } from 'graphql-subscriptions-client';
import { DEV_WS_NETWORK_URL } from '@constants/global.constants';
import {
  onDaysChange,
} from '@services/api/gql.subscriptions.ws.service';

class WSService {
  constructor() {
    this.url = DEV_WS_NETWORK_URL;
    this.client = null;
  }

  createClient() {
    this.client = new SubscriptionClient(this.url, {
      reconnect: true,
      lazy: true, // only connect when there is a query
    });
    return this.client;
  }

  setUrl(url) {
    this.url = url;
    if (this.client) {
      this.client.close(true);
    }
    this.createClient();
  }

  onDaysChange(countDays) {
    const date = moment().subtract(countDays, 'day').format('YYYY-MM-DD');
    return this.client.request({ query: onDaysChange, variables: { date } });
  }
}

export default new WSService();
