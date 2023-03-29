import { defineConfig } from 'vite';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: { 
        main: resolve(__dirname, 'src/index.html'), 
        contact: resolve(__dirname, 'src/contact.html'), 
        faq: resolve(__dirname, 'src/faq.html'), 
        login: resolve(__dirname, 'src/login.html'), 
        price: resolve(__dirname, 'src/price.html'), 
        register: resolve(__dirname, 'src/register.html'), 
        text: resolve(__dirname, 'src/text page.html'), 
      }, 
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});

