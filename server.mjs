import { createRequestHandler } from "@remix-run/express";
import { installGlobals } from "@remix-run/node";
import express from "express";
import expressStaticGzip from "express-static-gzip";
import { fileURLToPath } from "node:url";
import path from "node:path";

installGlobals();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const viteDevServer =
  process.env.NODE_ENV === "production"
    ? undefined
    : await import("vite").then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        })
      );

const app = express();

// handle asset requests
if (viteDevServer) {
  app.use(viteDevServer.middlewares);
} else {
  app.use(
    "/assets",
    expressStaticGzip(path.join(__dirname, "build/client/assets"), {
      immutable: true,
      maxAge: "1y",
      enableBrotli: true,
      index: false,
      serveStatic: { fallthrough: true },
    })
  );
}
app.use(
  expressStaticGzip(path.join(__dirname, "build/client"), {
    maxAge: "1h",
    enableBrotli: true,
    index: false,
    serveStatic: { fallthrough: true },
  })
);

// handle SSR requests
app.all(
  "*",
  createRequestHandler({
    build: viteDevServer
      ? () => viteDevServer.ssrLoadModule("virtual:remix/server-build")
      : await import("./build/server/index.js"),
  })
);

const port = 3000;
app.listen(port, () => console.log("http://localhost:" + port));
