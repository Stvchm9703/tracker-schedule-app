import { Limits, Prefs, LabelNames, Label,List, List2, PerBoard ,Board} from './others'
import { Member, Membership, MemberDesp,MemberCreator } from './Member'
import { CardDetail, Old, Card, } from './Card'
import { Attachment } from './Attachment'
export interface Broad {
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
  limits: Limits;
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


export interface Action {
  id: string;
  idMemberCreator: string;
  data: {
    old?: Old;
    card?: Card;
    board?: Board;
    list?: List;
    idMember?: string;
    member?: MemberDesp;
    listBefore?: MemberDesp;
    listAfter?: MemberDesp;
    attachment?: Attachment;
    text?: string;
    deactivated?: boolean;
    memberType?: string;
    idMemberAdded?: string;
  };
  type: string;
  date: string;
  appCreator?: MemberDesp;
  limits: {
    reactions?: {
      perAction: PerBoard;
      uniquePerAction: PerBoard;
    };
  };
  memberCreator: MemberCreator;
  member?: MemberCreator;
}