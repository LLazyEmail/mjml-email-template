      '<mj-section>
        <mj-column width="75%">
          <mj-text>
            <h3 style="font-weight: bold; margin-top: 0; margin-bottom: 0"> <a href="https://blog.recast.ai/module-faster-shadow/" style="color: #3498DB; text-decoration: none">
                Modules, are you faster than your shadows?
              </a> </h3>
            <p style="font-size: 14px">As a developer, should you use modules or code this bit of feature by yourself? Let's find out.</p>
          </mj-text>
        </mj-column>
        <mj-column width="25%">
          <mj-image width="100px" href="https://blog.recast.ai/module-faster-shadow/" src="https://cdn.recast.ai/newsletter/183.png"></mj-image>
        </mj-column>
      </mj-section>';




// ts
// import { Tag } from "../types";

// const Article: Tag = (attrs, children) => {
//   const { style } } = attrs || {};
//   const styleAttr = style ?? "margin:20px 0;";
//   return `<article style="${styleAttr}">${children}</article>`;
// };

// export default Article;

Plain JS version:
js
Copy
const Article = (attrs, children) => {
  const styleAttr = attrs && attrs.style ? attrs.style : "margin:20px 0;";
  return `<article style="${styleAttr}">${children}</article>`;
};
