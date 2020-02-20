import rimraf from 'rimraf';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

function output(name) {
  return {
    dir: 'dist',
    format: 'iife',
    entryFileNames: '[name]-[hash].js',
    name,
    globals: {
      preact: 'preact'
    }
  };
}

function input(name, path) {
  return {
    [name]: path
  };
}

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const external = ['preact'];
const plugins = [
  resolve({ extensions }),
  commonjs(),
  typescript(),
  babel({
    extensions,
    presets: [['@babel/preset-env', { targets: '> 1%, not dead' }]],
    plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'h', pragmaFrag: 'Fragment' }]],
    runtimeHelpers: true,
    exclude: ['node_modules/**']
  }),
  terser({
    output: {
      comments: false
    }
  })
];

rimraf.sync('dist');
export default [
  {
    external,
    input: input('av-header', 'src/index.tsx'),
    output: output('AvHeader'),
    plugins
  }
];
