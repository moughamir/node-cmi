export type defaultOptions = {
  storetype: '3D_PAY_HOSTING',
  trantype: 'PreAuth',
  currency: '504',
  rnd: () => any,
  lang: APP_LANG,
  hashAlgorithm: 'ver3',
  'encoding'?: 'UTF-8',
  'refreshtime'?: number
}
export enum APP_LANG { 'ar', 'fr', 'en' };
export type RequireOptions = {
  storekey: string,
  clientid: string,
  storetype: string,
  trantype: string,
  amount: number,
  currency: string,
  oid: any,
  okUrl: any,
  failUrl: any,
  lang: APP_LANG,
  email?: any,
  BillToName: any
  hashAlgorithm: any

}
export interface ClientInterface {
  readonly GATEWAY_ENDPOINT: string;
  readonly getDefaultOpts: () => defaultOptions;

  getRequireOpts: () => RequireOptions;

  generateHash: ($storeKey: string) => string;

  dd: (...$values: any) => any;
}