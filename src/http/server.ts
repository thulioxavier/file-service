import fastify from "fastify";
import cors from "@fastify/cors";
import { fileRoutes } from "./routes/file.routes";

const app = fastify({
  logger: true,
});

app.register(cors, {
  origin: true,
});

app.register(fileRoutes);

app
  .listen({
    port: 3333,
    host: "0.0.0.0",
  })
  .then((msg) => {
    console.log("HTTP Server Running 🔥");
  });
