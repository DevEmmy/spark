function resolveRelativeImports(code, baseURL) {
  return code.replace(
    /\b(from|import)(\s+)(["'])(\.{1,2}\/[^"']+)\3/g,
    (match, keyword, space, quote, specifier) =>
      `${keyword}${space}${quote}${new URL(specifier, baseURL).href}${quote}`
  );
}

async function loadJsx(relativePath) {
  const sourceURL = new URL(relativePath, import.meta.url);
  const source = await fetch(sourceURL).then((res) => res.text());

  const { code } = Babel.transform(source, {
    presets: [["react", { pragma: "jsx", pragmaFrag: "Fragment" }]],
    sourceType: "module",
    filename: relativePath,
  });

  const rewritten = resolveRelativeImports(code, sourceURL);
  const blob = new Blob([rewritten], { type: "text/javascript" });
  await import(URL.createObjectURL(blob));
}

loadJsx("./main.jsx");
