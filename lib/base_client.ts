import { APP_LANG, ClientInterface, RequireOptions } from "./interface";

export class BaseClient implements ClientInterface {
  GATEWAY_ENDPOINT: 'https://testpayment.cmi.co.ma';
  public requireOpts:RequireOptions;

  constructor(requireOpts:RequireOptions){
    requireOpts= {
      ...this.getDefaultOpts(),
      ...requireOpts
    }
    this.validateConfig(this.requireOpts)
    this.requireOpts = requireOpts
    
  }
  validateConfig(_requireOpts: RequireOptions) {
    throw new Error("Method not implemented.");
  }
  getDefaultOpts: () => {
    storetype: "3D_PAY_HOSTING",
    trantype: "PreAuth",
    currency: "504",
    rnd: () => any,
    lang: APP_LANG.ar,
    hashAlgorithm: "ver3",
    encoding: "UTF-8",
    refreshtime: 5,
  };

 

  getRequireOpts () {
    return this.requireOpts
  };
  generateHash: ($storeKey: string) => string;
  dd: (...$values: any) => any;

}

function microtime() {
  throw new Error("Function not implemented.");
}
