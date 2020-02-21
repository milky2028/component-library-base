## Design Decisions

### Preact

Preact is smaller (only 3.5kb gzipped) and faster than React and React DOM and uses the same API. It's well supported and reduces the network burden on targets ingesting the component library.

Preact is treated as an external/peer dependency and is not compiled with this project, expecting the parent project to be the one to include it.

### Functional Components and Hooks

Preact contains the same React Hooks API, enabling simpler functional components and fewer (hopefully zero) higher order components.

JavaScript was never built for classes and thus JS classes leave alot to be desired. Class methods do not minify well and can lead to larger network payloads. "this" can lead to bugs and confusion as "this" in JavaScript often carries a different meaning than it does in other languages.

JavaScript had first-class functions when many other langauges did not. Functions are easier to test. React also prefers a Functional Programming style in general, so functional components fit more cohesively into a React/Preact project.

### TypeScript

TypeScript is not a a silver bullet. It will not prevent all type errors and its securities are easy to get around (via "as", "any", and "tsignore"). It is, however, a fantastic code communication tool between developers and especially for libraries. TypeScript can significantly reduce the amount of time you spend Googling reference implementations, keeping you in your editor and writing code.

### Rollup

Rollup's API is easier to understand than Webpack's and is better for libraries (it's also faster). A plugin that's thousands of lines in Webpack, might only be 50 in Rollup. This makes your own build process easily extendible and hackable. Most well-known libraries already use Rollup to distribute their builds, including Angular, Vue, and more. Rollup watch can be combined with a simple server to enable hot reload.

## TODOS:

- ~~Add a linter (ESlint with relevant plugins, add more specific rules, add npm script for linting)~~
- Add automatic rollup build process that treats each folder as a component to be built and each index.tsx file as that component's main.
- Add pre-commit hooks (Husky) to lint and fix before committing, block commits if they fail
- Add a simple server and watch process for local development
- Look more into alternative CSS in JS libraries and their pros/cons (Emotion, Styled Components. But maybe also, don't and keep it simple)
- Emit type declarations and source maps in builds
- Component playground
- VSCode settings/recommended extensions
- ~~Add prettier infused with ESLint~~
- Add testing framework (Jest)
