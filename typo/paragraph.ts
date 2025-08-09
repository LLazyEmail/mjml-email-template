// ParagraphStatic() always returns the fixed MJML content.
// Paragraph(attrs) accepts parameters but ignores them, always returning the static MJML string.

'<mj-section>
    <mj-column width="100%">
        <mj-text align="center">Your bimonthly intake of AI, machine learning and bots is here!</mj-text>
    </mj-column>
</mj-section>';

const Paragraph = (attrs, children) => {
  const { style } } = attrs || {};
  const styleAttr = style || "margin: 15px 0; line-height: 1.5;";
  return `<p style="${styleAttr}">${children}</p>`;
};


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


----


// Static version: always returns the fixed MJML snippet
const ParagraphStatic = (): string => {
  return `<mj-section>
    <mj-column width="100%">
        <mj-text align="center">Your bimonthly intake of AI, machine learning and bots is here!</mj-text>
    </mj-column>
</mj-section>`;
};

import { Tag } from "../types"; // assuming your types are imported from your project

const Paragraph: Tag = (attrs, children) => {
  const { style } } = attrs || {};
  const styleAttr = style ?? "margin: 15px 0; line-height: 1.5;";
  return `<mj-section>
    <mj-column width="100%">
        <mj-text align="center" style="${styleAttr}">Your bimonthly intake of AI, machine learning and bots is here!</mj-text>
    </mj-column>
</mj-section>`;
};

const staticOutput: string = ParagraphStatic();

const dynamicOutput: string = Paragraph({ style: "color: red;" });


---


    function ParagraphStatic() {
  return `<mj-section>
    <mj-column width="100%">
        <mj-text align="center">Your bimonthly intake of AI, machine learning and bots is here!</mj-text>
    </mj-column>
</mj-section>`;
}

function Paragraph(attrs, children) {
  // Accepts attrs but ignores their values, always returns the same string
  return `<mj-section>
    <mj-column width="100%">
        <mj-text align="center" style="margin: 15px 0; line-height: 1.5;">Your bimonthly intake of AI, machine learning and bots is here!</mj-text>
    </mj-column>
</mj-section>`;
}

const staticResult = ParagraphStatic();
const dynamicResult = Paragraph({ style: "color: red;" }, null);
console.log(staticResult);
console.log(dynamicResult);




    
