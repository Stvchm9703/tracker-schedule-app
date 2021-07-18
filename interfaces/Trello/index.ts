import { CardDetail, Old, Card } from './Card'
import { Attachment, AttachmentDetail } from './Attachment'
import { MemberDesp, Member, MemberCreator, Membership } from './Member';
import { PerBoard, Label ,LabelNames, Prefs,List, List2 , Board,Limits ,DescDatum,Badges , Icon, } from './others';
import { Action, Broad } from './Broad';
export interface Trello {
  id: string;
  name: string;
  desc: string;
  descData?: any;
  closed: boolean;
  dateClosed?: any;
  idOrganization: string;
  shortLink: string;
  powerUps: any[];
  dateLastActivity: string;
  idTags: any[];
  datePluginDisable?: any;
  creationMethod?: any;
  idBoardSource?: any;
  idMemberCreator: string;
  idEnterprise?: any;
  pinned: boolean;
  starred?: any;
  url: string;
  subscribed?: any;
  dateLastView?: any;
  shortUrl: string;
  enterpriseOwned: boolean;
  ixUpdate: string;
  limits?: Limits;
  templateGallery?: any;
  premiumFeatures: any[];
  prefs: Prefs;
  labelNames: LabelNames;
  actions: Action[];
  cards: CardDetail[];
  labels: Label[];
  lists: List2[];
  members: Member[];
  checklists: any[];
  customFields: any[];
  memberships: Membership[];
  pluginData: any[];
}



export type{
  CardDetail, Old, Card,
  Attachment, AttachmentDetail,
  MemberDesp, Member, MemberCreator, Membership,
  PerBoard, Label, LabelNames, Prefs, List, List2, Board, Limits,DescDatum, Badges , Icon,
  Action, Broad,
}