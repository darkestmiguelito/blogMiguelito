const fs = require("fs");
const path = require("path");

const root = __dirname;
const dist = path.join(root, "dist");
const files = [
  "index.html",
  "que-son.html",
  "impacto.html",
  "riesgos.html",
  "styles.css",
  "README.md",
];

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(dist, file));
}

fs.cpSync(path.join(root, "public"), path.join(dist, "public"), {
  recursive: true,
});

console.log("Sitio estatico generado en dist/");
