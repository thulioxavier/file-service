import { randomUUID } from "node:crypto";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3 } from "../libs/cloudflare";
import { env } from "../env";
import { FileModel } from "../models";
import { UploadFileServiceDTO } from "../interfaces/file";
import { PutObjectCommand } from "@aws-sdk/client-s3";

export const UploadFileService = async (data: UploadFileServiceDTO) => {
  const fileKey = randomUUID().concat("-").concat(data.filename);

  const signeUrl = await getSignedUrl(
    S3,
    new PutObjectCommand({
      Bucket: env.BUCKET_NAME,
      Key: fileKey,
      ContentType: data.contentType,
      ACL: data.ACL || "private",
    }),
    { expiresIn: 600 }
  );

  const file = await FileModel.create({
    name: data.filename,
    key: fileKey,
    type: data.contentType,
  });

  return { data: { url: signeUrl, file: file.data } };
};
