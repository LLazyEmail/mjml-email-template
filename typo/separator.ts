      '<mj-section>
        <mj-column width="100%">
          <mj-divider border-width="1px" border-color="#E0E0E0"></mj-divider>
        </mj-column>
      </mj-section>';



const Separator = (attrs) => {
  const style = attrs && attrs.style ? attrs.style : "border:none; border-top:1px solid #ccc; margin:20px 0;";
  return `<hr style="${style}">`;
};
