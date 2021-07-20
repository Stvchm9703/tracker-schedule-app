// import { Database, MySQLConnector, DataTypes } from 'denodb';
// import config from '../config/mod.ts';
// import { UserModel } from './user.ts';
// const rC = config.runtimeConfig;
export type UUID = string;

export interface BaseModel {
  _id?: UUID;
  created_date: Date | string | null;
  created_by:  UUID;
  updated_date: Date | string | null;
  updated_by: UUID;
}
