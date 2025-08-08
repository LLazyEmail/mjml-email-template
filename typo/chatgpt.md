const Image = (attrs, children) => {
  const { src, alt, style } = attrs || {};
  const styleAttr = style || "max-width: 100%; height: auto; display: block;";
  return `<img src="${src || ''}" alt="${alt || ''}" style="${styleAttr}">`;
};

2. paragraph.ts

js


const Paragraph = (attrs, children) => {
  const { style } } = attrs || {};
  const styleAttr = style || "margin: 15px 0; line-height: 1.5;";
  return `<p style="${styleAttr}">${children}</p>`;
};


3. 
separator.ts
js


const Separator = (attrs) => {
  const style = attrs && attrs.style ? attrs.style : "border:none; border-top:1px solid #ccc; margin:20px 0;";
  return `<hr style="${style}">`;
};


---




import { Tag } from "../types";

const Image: Tag = (attrs, children) => {
  const { src, alt, style } = attrs || {};
  const styleAttr = style || "max-width: 100%; height: auto; display: block;";
  // src and alt are required for img, but you can handle undefined as empty string
  return `<img src="${src ?? ''}" alt="${alt ?? ''}" style="${styleAttr}">`;
};

export default Image;


2. paragraph.ts
ts
Copy
import { Tag } from "../types";

const Paragraph: Tag = (attrs, children) => {
  const { style } } = attrs || {};
  const styleAttr = style ?? "margin: 15px 0; line-height: 1.5;";
  return `<p style="${styleAttr}">${children}</p>`;
};

export default Paragraph;


3. separator.ts
ts
Copy
import { Tag } from "../types";

const Separator: Tag = (attrs) => {
  const style = attrs && attrs.style ? attrs.style : "border:none; border-top:1px solid #ccc; margin:20px 0;";
  return `<hr style="${style}">`;
};

export default Separator;
