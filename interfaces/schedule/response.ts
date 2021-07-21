import { BaseModel } from "./base";
export type IResponse =  {
  data?: BaseModel | any;
  count: number;
}

export type IResponseError = {
  error: any;
  log: string | any;
}
