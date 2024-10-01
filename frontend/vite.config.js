import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const basename =  mode === 'production' ? '/E-Commerce-Website/' : '/';
  return{
    base: basename,
    plugins: [react()],
  };
  
});
