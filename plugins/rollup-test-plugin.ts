import { OutputBundle, Plugin } from 'rollup';
// this dependency only has esm export

/** demo plugin */
export const test = (): Plugin => {
  return {
    name: 'rollup-plugin-test',
    closeBundle() {
      // If a dependency containing only ESM is used, an exception will be thrown
    },
  };
};
