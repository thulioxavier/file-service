import { FastifyInstance } from "fastify";
import { uploadFile } from "../controllers/files.controller";

export const fileRoutes = async (fastify: FastifyInstance) => {
  fastify.post("/upload", uploadFile);
  fastify.get("/file/:id", () => {});
};
