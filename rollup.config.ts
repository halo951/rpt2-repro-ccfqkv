import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'esm',
    exports: 'named',
  },
  plugins: [
    typescript({
      verbosity: 3,
      clean: true,
    }),
  ],
};
