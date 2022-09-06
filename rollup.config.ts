import { RollupOptions } from 'rollup';
import typescript from 'rollup-plugin-typescript2';
import { test } from './plugins/rollup-test-plugin';

export default (): RollupOptions => {
  return {
    input: './src/index.ts',
    output: {
      exports: 'auto',
      inlineDynamicImports: true,
      format: 'cjs',
      file: `dist/index.cjs.js`,
    },
    plugins: [
      typescript({
        clean: true,
        useTsconfigDeclarationDir: true,
        abortOnError: true,
      }),
      // look here
      test(),
    ],
  };
};
