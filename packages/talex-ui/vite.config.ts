import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJSX from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJSX(), dts({ insertTypesEntry: true, copyDtsFiles: false })],
  build: {
    minify: false,
    lib: {
      entry: './index.ts',
      name: 'TalexUI',
      fileName: 'index',
      formats: ['es'],
    },
  },
});
