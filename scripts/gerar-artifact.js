// Gera a versão do index.html usada na publicação como Artifact do Claude:
// a plataforma já envolve a página com doctype, <html>, <head> e <body>,
// então removemos essas tags e mantemos título, fontes, estilos e conteúdo.
// Uso: node scripts/gerar-artifact.js <arquivo-de-saida>
const fs = require("fs");
const path = require("path");

const saida = process.argv[2];
if (!saida) {
  console.error("Uso: node scripts/gerar-artifact.js <arquivo-de-saida>");
  process.exit(1);
}

const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8")
  .replace(/<!doctype html>\s*/i, "")
  .replace(/<\/?html[^>]*>\s*/gi, "")
  .replace(/<\/?head>\s*/gi, "")
  .replace(/<\/?body>\s*/gi, "")
  .replace(/<meta charset[^>]*>\s*/i, "")
  .replace(/<meta name="viewport"[^>]*>\s*/i, "");

fs.writeFileSync(saida, html);
console.log("Gerado:", saida);
