import { FastifyReply, FastifyRequest } from "fastify";
import { UploadFileService } from "../../services/upload.service";
import { z } from "zod";

export const uploadFile = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const uploadsBodySchema = z.object({
    filename: z.string().min(1),
    contentType: z.string().regex(/\w+\/[-+.\w]+/),
  });

  const { contentType, filename } = uploadsBodySchema.parse(request.body);

  const signedUrl = await UploadFileService({ contentType, filename });

  return reply.send(signedUrl);
};
