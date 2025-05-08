import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
import path from 'node:path';
import { createRequire } from 'node:module';

import { normalizePath } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const require = createRequire(import.meta.url);
const standardFontsDir = normalizePath(
  path.join(path.dirname(require.resolve('pdfjs-dist/package.json')), 'standard_fonts')
);

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: standardFontsDir,
          dest: '',
        },
      ],
    }),
  ],
  // server: {
  //   port: 3000, // porta padrão do Vite
  //   open: true, // abre o navegador automaticamente
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5000', // URL do seu backend
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
});
