import { Client } from '@elastic/elasticsearch';
import { Gender } from '../constants';
import User from '../entities/User';
import EsUser from '../indexes/EsUser';
import { SearchResponse } from '../types';
// import { SearchResponse } from '../types';
import esService from './EsService';

class EsUserService {

  esClient: Client = null;
  indexName = 'esuser-index'; // not sure why cannot accept captital letter

  constructor() {
    this.esClient = esService.getClient();
  }

  async index(): Promise<void> {
    const esUser = new User('1', 'Min Ko', 'Thet', Gender.MALE, 'Singapore').getIndice();
    await this.esClient.index({
      id: esUser.id,
      index: this.indexName,
      body: esUser
    });
  }

  async search(): Promise<EsUser[]> {
    const { body: { hits: { hits } } } = await this.esClient.search<SearchResponse<EsUser>>({
      index: this.indexName,
      body: {
        query: {
          match: {
            fullName: 'Thet Min Ko'
          }
        }
      }
    });

    return hits.map(hit => hit['_source']);
  }

}

const esUserService = new EsUserService();
export default esUserService;
