import { el, mount, text, setChildren } from 'redom';
import request from 'superagent';

export default class Main {
  constructor() {
    return this.load();
  }
  load() {
    const url = 'http://pokeapi.co/api/v2/pokemon/1';
    request.get(url, (err, res) => {
      return new Promise((resolve, reject) => {
        if (err) {
          reject(console.log(err));
        } else {
          resolve(console.log(res.body))
        }
      }).then(() => alert('done!'));
    })
  }
}
