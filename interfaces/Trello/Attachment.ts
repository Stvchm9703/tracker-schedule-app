

export interface AttachmentDetail {
  bytes?: number;
  date: Date | string;
  edgeColor?: string | any;
  idMember: string;
  isUpload: boolean;
  mimeType?: string | any;
  name: string;
  previews: Scaled[] | any;
  url: string;
  pos: number;
  fileName?: string;
  id: string;
}


export interface Attachment {
  id: string;
  name: string;
  url?: string;
  previewUrl?: string;
  previewUrl2x?: string;
}


export interface Scaled {
  _id: string;
  id: string;
  scaled: boolean;
  url: string;
  bytes: number;
  height: number;
  width: number;
}


export interface Cover {
  idAttachment?: string;
  color?: string | any;
  idUploadedBackground?: any;
  size: string;
  brightness: string;
  idPlugin?: any;
  scaled?: Scaled[];
  edgeColor?: string;
  plugin?: any;
}
