import { Client } from '@elastic/elasticsearch';

class EsService {

  private client: Client = null;

  constructor() {
    this.client = new Client({
      nodes: ['http://localhost:9200']
    });
  }

  getClient(): Client {
    return this.client;
  }

}

const esService = new EsService();
export default esService;
