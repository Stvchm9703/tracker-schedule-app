import { DescDatum } from './others';
export interface Membership {
  id: string;
  idMember: string;
  memberType: string;
  unconfirmed: boolean;
}

export interface Member {
  id: string;
  bio: string;
  bioData?: DescDatum;
  confirmed: boolean;
  memberType: string;
  username: string;
  activityBlocked: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  fullName: string;
  idEnterprise?: any;
  idEnterprisesDeactivated?: any;
  idMemberReferrer?: any;
  idPremOrgsAdmin?: any;
  initials: string;
  nonPublic: any;
  nonPublicAvailable: boolean;
  products: any[];
  url: string;
  status: string;
}

export interface MemberDesp {
  id: string;
  name: string;
}



export interface MemberCreator {
  id: string;
  username: string;
  activityBlocked: boolean;
  avatarHash?: string;
  avatarUrl?: string;
  fullName: string;
  idMemberReferrer?: any;
  initials: string;
  nonPublic?: any;
  nonPublicAvailable: boolean;
}
