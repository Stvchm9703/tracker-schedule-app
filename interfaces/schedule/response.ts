import { BaseModel } from "./base.ts";
export interface ResponseI {
  data?: BaseModel | any;
  count: number;
}

export interface ResponseErrorI {
  error: any;
  log: string | any;
}
