// import { Model, DataTypes } from 'denodb';
import { BaseModel } from './base.ts';
// import { v5 } from 'uuid';

export interface TaskTag extends BaseModel {
  name: string;
  description: string;
  themeColor: string;
  group: string;
}

