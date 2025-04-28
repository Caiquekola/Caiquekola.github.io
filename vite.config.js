import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['pdfjs-dist'] // importante excluir para não deixar Vite tentar otimizar ele
  },
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
})
