import { BaseModel } from './base.ts'
export interface UserModel extends BaseModel {
  /**
   * @description staff-id
   *
   * @type {string}
   * @memberof UserModel
   */
  UserId: string;

  Name: string;
  NickName: string;
  // HK / SZ / SH
  Side: string;
  Password: string;
  // role : product-team / worker / manager / vendor / 
  Role: string;
}
