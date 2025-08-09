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
