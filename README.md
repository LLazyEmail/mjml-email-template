# mjml-email-template


https://mjml.io/try-it-live/templates/recast



1. article.ts
TypeScript version:
ts
Copy
import { Tag } from "../types";

const Article: Tag = (attrs, children) => {
  const { style } } = attrs || {};
  const styleAttr = style ?? "margin:20px 0;";
  return `<article style="${styleAttr}">${children}</article>`;
};

export default Article;
Plain JS version:
js
Copy
const Article = (attrs, children) => {
  const styleAttr = attrs && attrs.style ? attrs.style : "margin:20px 0;";
  return `<article style="${styleAttr}">${children}</article>`;
};
2. body.ts
TypeScript version:
ts
Copy
import { Tag } from "../types";

const Body: Tag = (attrs, children) => {
  const { style } } = attrs || {};
  const styleAttr = style ?? "margin:0; padding:0;";
  return `<body style="${styleAttr}">${children}</body>`;
};

export default Body;
Plain JS version:
js
Copy
const Body = (attrs, children) => {
  const styleAttr = attrs && attrs.style ? attrs.style : "margin:0; padding:0;";
  return `<body style="${styleAttr}">${children}</body>`;
};
3. footer.ts
TypeScript version:
ts
Copy
import { Tag } from "../types";

const Footer: Tag = (attrs, children) => {
  const { style } } = attrs || {};
  const styleAttr = style ?? "margin-top:20px; font-size:12px; color:#999;";
  return `<footer style="${styleAttr}">${children}</footer>`;
};

export default Footer;
Plain JS version:
js
Copy
const Footer = (attrs, children) => {
  const styleAttr = attrs && attrs.style ? attrs.style : "margin-top:20px; font-size:12px; color:#999;";
  return `<footer style="${styleAttr}">${children}</footer>`;
};
4. head.ts
TypeScript version:
ts
Copy
import { Tag } from "../types";

const Head: Tag = (attrs, children) => {
  const { style } } = attrs || {};
  const styleAttr = style ?? "";
  return `<head style="${styleAttr}">${children}</head>`;
};

export default Head;
Plain JS version:
js
Copy
const Head = (attrs, children) => {
  const styleAttr = attrs && attrs.style ? attrs.style : "";
  return `<head style="${styleAttr}">${children}</head>`;
};
5. main.ts
TypeScript version:
ts
Copy
import { Tag } from "../types";

const Main: Tag = (attrs, children) => {
  const { style } } = attrs || {};
  const styleAttr = style ?? "margin:20px auto; max-width:600px;";
  return `<main style="${styleAttr}">${children}</main>`;
};

export default Main;
Plain JS version:
js
Copy
const Main = (attrs, children) => {
  const styleAttr = attrs && attrs.style ? attrs.style : "margin:20px auto; max-width:600px;";
  return `<main style="${styleAttr}">${children}</main>`;
};
