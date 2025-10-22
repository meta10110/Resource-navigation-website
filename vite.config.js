import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages 部署配置
  // 如果你的仓库名是 my-repo，base 应该设置为 '/my-repo/'
  // 如果部署到用户页面 (username.github.io)，设置为 '/'
  base: './', // 使用相对路径，适用于任何仓库
  
  plugins: [react()],
  
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: false,
    allowedHosts: ['.e2b.app', '.e2b.dev', '.vercel.run', 'localhost', '127.0.0.1']
  },
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // 确保构建后的文件可以在 GitHub Pages 上正常工作
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})