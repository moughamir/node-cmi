import { BaseClient } from "./base_client";

export class Client extends BaseClient{
  HASH: string;
  async PostRedirect() {
    this.generateHash
    const endpoint = this.GATEWAY_ENDPOINT + '/fim/est3Dgate';
    const response = await fetch(endpoint, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(this.getRequireOpts) // body data type must match "Content-Type" header
    });
    return response.json(); 
  }
  public hash_eq($hash: string): boolean
  {
      return this.HASH === $hash;
  }
}