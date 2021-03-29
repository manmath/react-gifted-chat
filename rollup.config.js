import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import jsx from 'acorn-jsx';
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('./package.json'));

const external = Object.keys(pkg.dependencies || {});
export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    sourcemap: true,
  },
  // All the used libs needs to be here
  external: [
    ...external,
    'prop-types',
    'react-native',
  ],
  acornInjectPlugins: [jsx()],
  plugins: [
    resolve(),
    typescript({ module: 'CommonJS', jsx: 'preserve' }),
    commonjs({ extensions: ['.ts', '.tsx'] }),
    // commonjs({
    //   include: 'node_modules/**',
    // }),
    // typescript(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
  ],
};
