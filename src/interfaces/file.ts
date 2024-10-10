import { ObjectCannedACL } from "@aws-sdk/client-s3";

export interface UploadFileServiceDTO {
  filename: string;
  contentType: string;
  ACL?: ObjectCannedACL;
}
