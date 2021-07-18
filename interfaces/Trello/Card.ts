import { Cover, AttachmentDetail } from './Attachment'
import { Badges, DescDatum, PerBoard, Label } from './others';
export interface Card {
  pos?: number;
  id: string;
  name?: string;
  idShort: number;
  shortLink: string;
  desc?: string;
  idList?: string;
  idAttachmentCover?: string;
  cover?: Cover;
  due?: string;
  dueReminder?: number;
  idMembers?: string[];
  dueComplete?: boolean;
}

export interface Old {
  pos?: number;
  desc?: string;
  idList?: string;
  name?: string;
  idAttachmentCover?: string;
  cover?: Cover;
  due?: string;
  dueReminder?: any;
  closed?: boolean;
  prefs?: {
    background: string;
  };
  idMembers?: string[];
  dueComplete?: boolean;
}


export interface CardDetail {
  id: string;
  address?: any;
  checkItemStates?: any;
  closed: boolean;
  coordinates?: any;
  creationMethod?: any;
  dateLastActivity: string;
  desc: string;
  descData?: DescDatum;
  dueReminder?: number;
  idBoard: string;
  idLabels: string[];
  idList: string;
  idMembersVoted: any[];
  idShort: number;
  idAttachmentCover?: string;
  locationName?: any;
  manualCoverAttachment: boolean;
  name: string;
  pos: number;
  shortLink: string;
  isTemplate: boolean;
  cardRole?: any;
  badges: Badges;
  dueComplete: boolean;
  due?: string;
  idChecklists: any[];
  idMembers: string[];
  labels: Label[];
  limits: {
    attachments: {
      perCard: PerBoard;
    };
    checklists: {
      perCard: PerBoard;
    };
    stickers: {
      perCard: PerBoard;
    };
  };
  shortUrl: string;
  start?: any;
  subscribed: boolean;
  url: string;
  cover: Cover;
  attachments: AttachmentDetail[];
  pluginData: any[];
  customFieldItems: any[];
}
