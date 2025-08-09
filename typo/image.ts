// Summary:
// ImageStatic() - returns the fixed MJML string.
// Image(attrs) - generates MJML based on passed parameters.


'<mj-section>
    <mj-column width="100%">
        <mj-image href="https://recast.ai?ref=newsletter" src="https://cdn.recast.ai/newsletter/city-01.png"></mj-image>
    </mj-column>
</mj-section>';


const Image = (attrs, children) => {
  const { src, alt, style } = attrs || {};
  const styleAttr = style || "max-width: 100%; height: auto; display: block;";
  return `<img src="${src || ''}" alt="${alt || ''}" style="${styleAttr}">`;
};


import { Tag } from "../types";

const Image: Tag = (attrs, children) => {
  const { src, alt, style } = attrs || {};
  const styleAttr = style || "max-width: 100%; height: auto; display: block;";
  // src and alt are required for img, but you can handle undefined as empty string
  return `<img src="${src ?? ''}" alt="${alt ?? ''}" style="${styleAttr}">`;
};

export default Image;



const ImageStatic = () => {
  return `<mj-section>
    <mj-column width="100%">
        <mj-image href="https://recast.ai?ref=newsletter" src="https://cdn.recast.ai/newsletter/city-01.png"></mj-image>
    </mj-column>
</mj-section>`;
};

const Image = (attrs, children) => {
  const { src, alt, style, href } = attrs || {};
  const styleAttr = style || "max-width: 100%; height: auto; display: block;";
  const srcAttr = src ?? "";
  const altAttr = alt ?? "";
  const hrefAttr = href ?? "";

  return `<mj-section>
    <mj-column width="100%">
        <mj-image ${hrefAttr ? `href="${hrefAttr}"` : ""} src="${srcAttr}" style="${styleAttr}"></mj-image>
    </mj-column>
</mj-section>`;
};

const resultStatic = ImageStatic();
console.log(resultStatic);

const result = Image({ href: "https://recast.ai?ref=newsletter", src: "https://cdn.recast.ai/newsletter/city-01.png" });
console.log(result);


---


    // Static version: always returns the fixed MJML snippet
const ImageStatic = (): string => {
  return `<mj-section>
    <mj-column width="100%">
        <mj-image href="https://recast.ai?ref=newsletter" src="https://cdn.recast.ai/newsletter/city-01.png"></mj-image>
    </mj-column>
</mj-section>`;
};


import { Tag } from "../types"; // assuming your type is imported from your project

const Image: Tag = (attrs, children) => {
  const { src, alt, style, href } = attrs || {};
  const styleAttr = style ?? "max-width: 100%; height: auto; display: block;";
  const srcAttr = src ?? "";
  const altAttr = alt ?? "";
  const hrefAttr = href ?? "";

  return `<mj-section>
    <mj-column width="100%">
        <mj-image ${hrefAttr ? `href="${hrefAttr}"` : ""} src="${srcAttr}" style="${styleAttr}"></mj-image>
    </mj-column>
</mj-section>`;
};

const staticResult: string = ImageStatic();

const dynamicResult: string = Image({ 
  src: "https://cdn.recast.ai/newsletter/city-01.png", 
  href: "https://recast.ai?ref=newsletter" 
});







