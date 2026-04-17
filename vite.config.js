import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(process.cwd(), 'src/index.js'),
      name: 'SimpleBlogUI',
      fileName: (format) =>
        format === 'es' ? 'simple-blog-ui.js' : 'simple-blog-ui.cjs',
      formats: ['es', 'cjs'],
    },
    sourcemap: true,
    rollupOptions: {
      external: [],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'simple-blog-ui.css';
          return assetInfo.name ?? 'asset';
        },
      },
    },
  },
});
