      '<mj-section>
        <mj-column width="45%">
          <mj-text align="center" font-weight="500" padding="0px" font-size="18px">ISSUE #18 - DECEMBER</mj-text>
          <mj-divider border-width="2px" border-color="#616161"></mj-divider>
          <mj-divider border-width="2px" border-color="#616161" width="45%"></mj-divider>
        </mj-column>
      </mj-section>';



// import { Tag } from "../types";

// const Header: Tag = (attrs, children) => {
//   const { style, ...restAttrs } = attrs || {};
//   const defaultStyle = "font-size:24px; margin:20px 0;";
//   const styleAttr = style ? `${style}; ${defaultStyle}` : defaultStyle;

//   return `<h1 style="${styleAttr}" ${Object.entries(restAttrs || {}).map(([k, v]) => `${k}="${v}"`).join(" ")}>${children}</h1>`;
// };

// export default Header;


// plain js version
// const Header = (attrs, children) => {
//   const styleAttr = attrs && attrs.style ? attrs.style + '; font-size:24px; margin:20px 0;' : 'font-size:24px; margin:20px 0;';
//   const otherAttrs = Object.entries(attrs || {})
//     .filter(([k]) => k !== 'style')
//     .map(([k, v]) => `${k}="${v}"`)
//     .join(" ");
//   return `<h1 style="${styleAttr}" ${otherAttrs}>${children}</h1>`;
// };


// Plain JS
// const HeaderStatic = () => {
//   return `<mj-section>
//     <mj-column width="45%">
//       <mj-text align="center" font-weight="500" padding="0px" font-size="18px">ISSUE #18 - DECEMBER</mj-text>
//       <mj-divider border-width="2px" border-color="#616161"></mj-divider>
//       <mj-divider border-width="2px" border-color="#616161" width="45%"></mj-divider>
//     </mj-column>
//   </mj-section>`;
// };

// import { Tag } from "../types";

// const Header: Tag = (attrs, children) => {
//   return `<mj-section>
//     <mj-column width="45%">
//       <mj-text align="center" font-weight="500" padding="0px" font-size="18px">ISSUE #18 - DECEMBER</mj-text>
//       <mj-divider border-width="2px" border-color="#616161"></mj-divider>
//       <mj-divider border-width="2px" border-color="#616161" width="45%"></mj-divider>
//     </mj-column>
//   </mj-section>`;
// };

// export default Header;



const Header = (attrs, children) => {
  // Example: applying style or other attributes
  const style = attrs && attrs.style ? attrs.style : "";
  const restAttrs = Object.entries(attrs || {}).filter(([k]) => k !== 'style')
    .map(([k, v]) => `${k}="${v}"`)
    .join(" ");

  return `<mj-section>
    <mj-column width="45%">
      <mj-text ${restAttrs} align="center" font-weight="500" padding="0px" font-size="18px" style="${style}">ISSUE #18 - DECEMBER</mj-text>
      <mj-divider border-width="2px" border-color="#616161"></mj-divider>
      <mj-divider border-width="2px" border-color="#616161" width="45%"></mj-divider>
    </mj-column>
  </mj-section>`;
};


