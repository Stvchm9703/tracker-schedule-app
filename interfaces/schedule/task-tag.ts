// import { Model, DataTypes } from 'denodb';
import { BaseModel } from './base.ts';
// import { v5 } from 'uuid';

export interface TaskTag extends BaseModel {
  name: string;
  description: string;
  themeColor: string;
  group: string;
}

export interface TaskTagDisp {
  _id: string;
  name: string;
  description: string;
  themeColor: string;
  group: string;
}

// const ConvTaskTagToDisp = (TT: TaskTag) => {
//   const { _id, name, description, themeColor, group } = TT;
//   return { _id, name, description, themeColor, group } as TaskTagDisp;
// };


// class TaskTagORM extends Model {
//   static table = 'task_tag';
//   static timestamps = true;
//   static fields = {
//     _id: DataTypes.UUID,
//     created_date: DataTypes.DATETIME,
//     name: DataTypes.STRING,
//   };

//   static defaults = {
//     _id: v5.generate(),
//     created_date: new Date(),


//   }
// }