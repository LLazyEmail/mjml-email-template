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
