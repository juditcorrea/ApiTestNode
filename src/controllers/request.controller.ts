import axios from 'axios';

class RequestController {
  public async get(url: string) {
    try {
      return axios.get(url);
    } catch (exception) {
      process.stderr.write(`ERROR received from ${url}: ${exception}\n`);
    }
  }
  public async post(url: string, parameters: string[]) {
    //TO DO
  }
}

export const requestController = new RequestController(); 