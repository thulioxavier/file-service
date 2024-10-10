import { FastifyInstance } from "fastify";
import { getFileURL, uploadFile } from "../controllers/files.controller";

export const fileRoutes = async (fastify: FastifyInstance) => {
  fastify.post("/upload", uploadFile);
  fastify.get("/read/:fileKey", getFileURL);
};
