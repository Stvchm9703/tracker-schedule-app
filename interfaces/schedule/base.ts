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

// export const BaseModelField = {
//   _id: DataTypes.UUID,
//   created_date: DataTypes.DATETIME,
//   created_by: DataTypes.UUID,
//   updated_date: DataTypes.DATETIME,
//   updated_by: DataTypes.UUID,
// }

// const connector = new MySQLConnector({
//   database: rC.database.dbname,
//   host: rC.database.host,
//   port: rC.database.port,
//   username: rC.database.username,
//   password: rC.database.password,
// });


// const db = new Database(connector);
// export { db }