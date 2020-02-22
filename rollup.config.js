import rimraf from 'rimraf';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { readdirSync } from 'fs';

rimraf.sync('dist');

const extensions = ['.ts', '.tsx'];
const plugins = [
  resolve({ extensions }),
  commonjs(),
  typescript(),
  babel({
    extensions,
    exclude: ['node_modules/**'],
    presets: [
      [
        '@babel/preset-env',
        {
          corejs: '3',
          useBuiltIns: 'usage',
          targets: '> 1%, not dead'
        }
      ]
    ],
    plugins: [
      [
        '@babel/plugin-transform-react-jsx',
        { pragma: 'h', pragmaFrag: 'Fragment' }
      ]
    ],
    runtimeHelpers: true
  }),
  terser({
    output: {
      comments: false
    }
  })
];

const components = readdirSync('src').map((componentFolder) => {
  return {
    external: ['preact'],
    input: {
      [componentFolder]: `src/${componentFolder}/index.tsx`
    },
    output: {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name]-[hash].js',
      name: componentFolder
    },
    plugins
  };
});

export default components;
