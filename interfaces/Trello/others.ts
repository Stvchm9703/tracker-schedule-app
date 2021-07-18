export interface DescDatum {
  emoji: any;
}
export interface Badges {
  attachmentsByType?: {
    trello?: {
      board: number;
      card: number;
    };
  };
  location: boolean;
  votes: number;
  viewingMemberVoted: boolean;
  subscribed: boolean;
  fogbugz: string;
  checkItems: number;
  checkItemsChecked: number;
  checkItemsEarliestDue?: any;
  comments: number;
  attachments: number;
  description: boolean;
  due?: string;
  dueComplete: boolean;
  start?: any;
}

export interface PerBoard {
  status: string;
  disableAt: number;
  warnAt: number;
}

export interface Icon {
  url: string;
}

export interface Label {
  id: string;
  idBoard: string;
  name: string;
  color: string;
}



export interface List {
  id: string;
  name: string;
  closed?: boolean;
  pos?: number;
}

export  interface List2 {
  id: string;
  name: string;
  closed?: boolean;
  pos?: number;
  softLimit?: any;
  creationMethod?: any;
  idBoard?: string;
  subscribed?: any;
  limits?: {
    cards?: {
      openPerList: PerBoard;
      totalPerList: PerBoard;
    }
  };
}



export interface Board {
  id: string;
  name: string;
  shortLink: string;
  prefs?: {
    background: string;
  };
}
export interface LabelNames {
  green: string;
  yellow: string;
  orange: string;
  red: string;
  purple: string;
  blue: string;
  sky: string;
  lime: string;
  pink: string;
  black: string;
}
export interface Prefs {
  permissionLevel: string;
  hideVotes: boolean;
  voting: string;
  comments: string;
  invitations: string;
  selfJoin: boolean;
  cardCovers: boolean;
  isTemplate: boolean;
  cardAging: string;
  calendarFeedEnabled: boolean;
  background?: string;
  backgroundImage?: any;
  backgroundImageScaled?: any;
  backgroundTile: boolean;
  backgroundBrightness: string;
  backgroundColor: string;
  backgroundBottomColor: string;
  backgroundTopColor: string;
  canBePublic: boolean;
  canBeEnterprise: boolean;
  canBeOrg: boolean;
  canBePrivate: boolean;
  canInvite: boolean;
}


export interface Limits {
  attachments: {
    perBoard: PerBoard;
    perCard: PerBoard;
  };
  boards: {
    totalMembersPerBoard: PerBoard;
  };
  cards: {
    openPerBoard: PerBoard;
    openPerList: PerBoard;
    totalPerBoard: PerBoard;
    totalPerList: PerBoard;
  };
  checklists: {
    perBoard: PerBoard;
    perCard: PerBoard;
  };
  checkItems: {
    perChecklist: PerBoard;
  };
  customFields: {
    perBoard: PerBoard;
  };
  customFieldOptions: {
    perField: PerBoard;
  }

  ;
  labels: {
    perBoard: PerBoard;
  };
  lists: {
    openPerBoard: PerBoard;
    totalPerBoard: PerBoard;
  };
  stickers: {
    perCard: PerBoard;
  };
  reactions: {
    perAction: PerBoard;
    uniquePerAction: PerBoard;
  };
}
