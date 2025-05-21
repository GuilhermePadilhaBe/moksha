import { appTools, defineConfig } from '@modern-js/app-tools'
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss'

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
    state: true,
  },
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
    tailwindcssPlugin(),
  ],
  tools: {
    rspack: {
      watchOptions: {
        ignored: /node_modules/,
      },
    },
  },
})
