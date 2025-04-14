import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

// export default defineConfig({
//     server: {
//         host:'0.0.0.0',
//         port: 5173,
//         strictPort: true
        
//     }  
    
// })

export default defineConfig({
    plugins: [react()],
    base: '/docker-a02/',
    server: {
                host:'0.0.0.0',
                port: 5173,
                strictPort: true
                
            }  
  })