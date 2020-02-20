## Design Decisions

### Preact

Preact is significantly smaller (only 3.5kb gzipped) and faster than React and React DOM and uses the same API. It's well supported, and reduces the network burden on targets ingesting the component library.

### Functional Components and Hooks

Preact uses the same React Hooks API, enabling simpler functional components and fewer (hopefully none) higher order components. JavaScript was never build for classes and thus JS classes leave alot to be desired. Class methods do not minify well and can lead to larger network payloads. "this" can lead to bugs and confusion as "this" in JavaScript often carries a different meaning vs other languages.

### TypeScript

TypeScript is not a a silver bullet. It will not prevent all type errors and its securities are easy to get around (via "as", "any", and "tsignore"). It is, however, a fantastic code communication tool between developers and especially for libraries, reducing the amount of time you have to Google reference implementations and keeping you in your editor writing code.

### Rollup

Rollup's API is significantly easier to understand than Webpack's and is better for libraries (it's also faster). A plugin that's thousands of lines in Webpack, might only be 50 in Rollup, making your own build process easily extendible and hackable. Most well-known libraries already use Rollup to distribute their builds, including Angular, Vue, and more. Rollup watch can be combined with a simple server to enable hot reload.

## TODOS:

- Add a linter (ESlint with relevant plugins)
- Add automatic rollup build process that treats each folder as a component to be build and each index.tsx file as that component's manifest.
- Add pre-commit hooks (Husky) to lint and fix before committing
- Add a simple server and watch process for local development
- Look more into alternative CSS in JS libraries and their pros/cons (Emotion, Styled Components. But maybe also, don't and keep it simple)
- Emit type declarations and source maps in builds
