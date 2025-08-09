      '<mj-section>
        <mj-column width="65%">
          <mj-image align="left" width="150px" href="https://recast.ai?ref=newsletter" src="https://cdn.recast.ai/newsletter/recast-ai-01.png"></mj-image>
        </mj-column>
        <mj-column width="35%">
          <mj-table>
            <tr style="list-style: none;line-height:1">
              <td> <a href="https://twitter.com/RecastAI">
                  <img width="25" src="https://cdn.recast.ai/newsletter/twitter.png" />
                </a> </td>
              <td> <a href="https://www.facebook.com/recastAI">
                  <img width="25" src="https://cdn.recast.ai/newsletter/facebook.png" />
                </a> </td>
              <td> <a href="https://medium.com/@RecastAI">
                  <img width="25" src="https://cdn.recast.ai/newsletter/medium.png" />
                </a> </td>
              <td> <a href="https://www.youtube.com/channel/UCA0UZlR8crpgwFiVaSTbVWw">
                  <img width="25" src="https://cdn.recast.ai/newsletter/youtube.png" />
                </a> </td>
              <td> <a href="https://plus.google.com/u/0/+RecastAi">
                  <img width="25" src="https://cdn.recast.ai/newsletter/google%2B.png" />
                </a> </td>
            </tr>
          </mj-table>
        </mj-column>
      </mj-section>';





js





// import { Tag } from "../types";

// const Footer: Tag = (attrs, children) => {
//   const { style } } = attrs || {};
//   const styleAttr = style ?? "margin-top:20px; font-size:12px; color:#999;";
//   return `<footer style="${styleAttr}">${children}</footer>`;
// };

// export default Footer;

// ts
// const Footer: Tag = (attrs, children) => {
//   return `<mj-section>
//         <mj-column width="65%">
//           <mj-image align="left" width="150px" href="https://recast.ai?ref=newsletter" src="https://cdn.recast.ai/newsletter/recast-ai-01.png"></mj-image>
//         </mj-column>
//         <mj-column width="35%">
//           <mj-table>
//             <tr style="list-style: none;line-height:1">
//               <td> <a href="https://twitter.com/RecastAI">
//                   <img width="25" src="https://cdn.recast.ai/newsletter/twitter.png" />
//                 </a> </td>
//               <td> <a href="https://www.facebook.com/recastAI">
//                   <img width="25" src="https://cdn.recast.ai/newsletter/facebook.png" />
//                 </a> </td>
//               <td> <a href="https://medium.com/@RecastAI">
//                   <img width="25" src="https://cdn.recast.ai/newsletter/medium.png" />
//                 </a> </td>
//               <td> <a href="https://www.youtube.com/channel/UCA0UZlR8crpgwFiVaSTbVWw">
//                   <img width="25" src="https://cdn.recast.ai/newsletter/youtube.png" />
//                 </a> </td>
//               <td> <a href="https://plus.google.com/u/0/+RecastAi">
//                   <img width="25" src="https://cdn.recast.ai/newsletter/google%2B.png" />
//                 </a> </td>
//             </tr>
//           </mj-table>
//         </mj-column>
//       </mj-section>`;
// };


js
// const Footer = (attrs, children) => {
//   const styleAttr = attrs && attrs.style ? attrs.style : "margin-top:20px; font-size:12px; color:#999;";
//   return `<footer style="${styleAttr}">${children}</footer>`;
// };

const Footer = (attrs, children) => {
  return `<mj-section>
        <mj-column width="65%">
          <mj-image align="left" width="150px" href="https://recast.ai?ref=newsletter" src="https://cdn.recast.ai/newsletter/recast-ai-01.png"></mj-image>
        </mj-column>
        <mj-column width="35%">
          <mj-table>
            <tr style="list-style: none;line-height:1">
              <td> <a href="https://twitter.com/RecastAI">
                  <img width="25" src="https://cdn.recast.ai/newsletter/twitter.png" />
                </a> </td>
              <td> <a href="https://www.facebook.com/recastAI">
                  <img width="25" src="https://cdn.recast.ai/newsletter/facebook.png" />
                </a> </td>
              <td> <a href="https://medium.com/@RecastAI">
                  <img width="25" src="https://cdn.recast.ai/newsletter/medium.png" />
                </a> </td>
              <td> <a href="https://www.youtube.com/channel/UCA0UZlR8crpgwFiVaSTbVWw">
                  <img width="25" src="https://cdn.recast.ai/newsletter/youtube.png" />
                </a> </td>
              <td> <a href="https://plus.google.com/u/0/+RecastAi">
                  <img width="25" src="https://cdn.recast.ai/newsletter/google%2B.png" />
                </a> </td>
            </tr>
          </mj-table>
        </mj-column>
      </mj-section>`;
};

// const result = Footer({ someAttr: 'value' }, null);
// console.log(result);
