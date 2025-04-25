/*
 * @Author: kukio fan2487373152@gmail.com
 * @Date: 2025-04-25 20:56:38
 * @LastEditors: kukio fan2487373152@gmail.com
 * @LastEditTime: 2025-04-25 21:06:46
 * @FilePath: /visual-close-fiting/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://6aee-183-236-19-153.ngrok-free.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})

// vite.config.js
// export default defineConfig({
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://1f1a-58-248-162-168.ngrok-free.app',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '')
//       }
//     }
//   }
// })
