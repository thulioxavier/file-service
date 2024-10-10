import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3 } from "../libs/cloudflare";
import { env } from "../env";
import { GetObjectCommand } from "@aws-sdk/client-s3";

export const getFile = async (fileKey: string) => {
  const signeUrl = await getSignedUrl(
    S3,
    new GetObjectCommand({
      Bucket: env.BUCKET_NAME,
      Key: fileKey,
    }),
    { expiresIn: 600 }
  );

  return { data: { url: signeUrl } };
};
