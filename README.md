# mjml-email-template


https://mjml.io/try-it-live/templates/recast




### Master Plan for Building Your Email Template Components System
#### 1. Objective Overview
- Break down a complete static HTML email into modular, composable components.
- Make each component capable of being used independently or assembled into full templates.
- Enable "incremental improvement" — start with static versions, then refine with customizable params.
- Keep the approach flexible, scalable, and usable with JS or TS.

---

#### 2. Core Concepts & Architecture
Component Paradigm: Each piece (section, image, text, header, footer, etc.) as a component function.

Two-Stage Design:
- Stage 1: Static hardcoded string output.
- Stage 2: Parametrized, customizable output for real-world flexibility.
- Unified API: Similar function signatures (attrs, children), regardless of stage, for consistency.
- Output as Strings: Focus on string-based output compatible with email rendering.

#### 3. Step-by-Step Plan
**Step 1: List All Required Components**
- Structural: MjSection, MjColumn, MjText, MjImage, MjDivider, etc.
- Typography: Header, Paragraph, Subtitle, etc.
- Layout: Container, Box, Wrapper
- Content: Button, Link, List, ListItem
- Special: Footer, Header, Head, Main

Identify all component types based on your complete email HTML.

Step 2: Create Basic Static Components
For each component:
Build a function that returns the full static MJML or HTML snippet.
Ignore input parameters or use them minimally.

Purpose:
Verify the layout matches your full email.
Serve as a starting point.

Example:

```js

const SectionStatic = () => `<mj-section>...</mj-section>`;
```

**Step 3: Create Parametrized Components**
Replace static content with:
attrs parameters for dynamic attributes (href, src, style, width, etc.)
children for inner content.
Implement logic to merge default styles and apply passed attrs.
Keep syntax consistent for easy future refactoring.
Example:

```js

const Header = (attrs, children) => {
  const style = attrs?.style ?? "font-size:24px; margin:20px 0;";
  return `<h1 style="${style}">${children}</h1>`;
};
```

### Step 4: Build a Rendering Workflow
Use a master script/file where you:
Call components in the correct sequence, passing parameters if needed.
Concatenate component outputs into the full email template.
Test rendering to verify the layout.
Example:

```js

const email = `
${Header({ style: "color: blue;" }, "Welcome!")}
${Paragraph({}, "This is an email paragraph.")}
${Image({ src: "img.png" }, "")}
`;
```

**Step 5: Incremental Improvements & Organization**
- Limit initial implementation to static outputs.
- Refine individual components to accept params for customization.
- Modularize repeated patterns: style merging, attribute handling.
- Document each component's props and purpose.

**Step 6: Automation and Tooling**

- Build a small script or build tool that:
- Assembles a full email from component calls.
- Generates the final HTML string/classic email markup.


4. Folder & File Structure (Sample)
```text

components/
├── layout/
│   ├── Section.js/.ts
│   ├── Column.js/.ts
│   └── Container.js/.ts
├── content/
│   ├── Header.js/.ts
│   ├── Paragraph.js/.ts
│   └── Button.js/.ts
├── extra/
│   ├── Footer.js/.ts
│   ├── Head.js/.ts
│   └── etc...
├── index.js/.ts (where you assemble the email)
```


Each component file exports a function with consistent pattern (attrs, children).

6. Validation & Testing
- Render the full email in your target environment.
- Compare output with your original static HTML.
- Fix issues iteratively.
- Enhance components for flexibility.

7. Final Tips
- Start with static, then move to parametrized.
- Document props for each component.
- Keep code maintainable and modular.
- Use consistent naming conventions.
