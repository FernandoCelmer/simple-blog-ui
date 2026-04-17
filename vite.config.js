import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(process.cwd(), 'src/index.js'),
        react: resolve(process.cwd(), 'src/react/index.js'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) =>
        `${entryName}.${format === 'es' ? 'js' : 'cjs'}`,
    },
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names?.[0] ?? 'asset';
          if (name === 'style.css') return 'simple-blog-ui.css';
          return name;
        },
      },
    },
  },
});
