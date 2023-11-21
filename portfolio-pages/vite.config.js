import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const basePath = '/portfolio-pages/'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [vue()],
  base: command === 'serve' ? '/' : './',
}));
