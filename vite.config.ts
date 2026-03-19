import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'inject-process-polyfill',
      transformIndexHtml(html) {
        return html.replace(
          '<head>',
          `<head>
    <script>
      if (typeof process === 'undefined') {
        window.process = {
          env: {
            NODE_ENV: 'production',
            DEBUG: undefined
          },
          version: '',
          versions: {},
          nextTick: function(fn) { setTimeout(fn, 0); },
          browser: true,
          cwd: function() { return '/'; },
          chdir: function() {}
        };
      }
      window.global = window.globalThis;
    </script>`
        );
      },
    },
  ],
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env.DEBUG': 'undefined',
    'global': 'globalThis',
  },
  resolve: {
    alias: {
      process: 'process/browser',
      buffer: 'buffer',
      util: 'util',
    },
  },
  optimizeDeps: {
    include: ['buffer', 'process/browser'],
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
