/* eslint-disable */
// Minimal local server for `npm start`. It serves the output of `webpack --watch` (dist/)
// plus the local-dev-env files, replacing webpack-dev-server (and its unpatched
// braces/micromatch dependency chain). There is no live reload; refresh the browser.
const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const staticMounts = [
  { prefix: "/env-config", dir: path.join(root, "local-dev-env") },
  { prefix: "/importmap", dir: path.join(root, "local-dev-env") },
];
const port = Number(process.env.PORT || 9000);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
};

function resolveInside(baseDir, relPath) {
  const filePath = path.join(baseDir, relPath);
  return filePath.startsWith(baseDir + path.sep) || filePath === baseDir
    ? filePath
    : null;
}

function isFile(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (e) {
    return false;
  }
}

function send(req, res, filePath) {
  res.writeHead(200, {
    "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
    "Cache-Control": "no-cache",
  });
  if (req.method === "HEAD") return res.end();
  fs.createReadStream(filePath).pipe(res);
}

function findFile(pathname) {
  for (const { prefix, dir } of staticMounts) {
    if (pathname === prefix || pathname.startsWith(prefix + "/")) {
      return resolveInside(dir, pathname.slice(prefix.length));
    }
  }
  return resolveInside(distDir, pathname);
}

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405);
    return res.end();
  }

  let pathname;
  try {
    pathname = decodeURIComponent(req.url.split("?")[0].split("#")[0]);
  } catch (e) {
    res.writeHead(400);
    return res.end();
  }

  const filePath = findFile(pathname);
  if (filePath === null) {
    res.writeHead(403);
    return res.end();
  }
  if (isFile(filePath)) return send(req, res, filePath);

  // Single-page app fallback, applied to paths with dots as well.
  const accept = req.headers.accept || "";
  if (accept.includes("text/html") || accept.includes("*/*")) {
    const indexPath = path.join(distDir, "index.html");
    if (isFile(indexPath)) return send(req, res, indexPath);
    res.writeHead(503, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(
      '<meta http-equiv="refresh" content="2">Waiting for the first webpack build...'
    );
  }
  res.writeHead(404);
  res.end();
});

server.listen(port, "localhost", () => {
  console.log(
    `[server] http://localhost:${port} (serving dist/ and local-dev-env/)`
  );
});
