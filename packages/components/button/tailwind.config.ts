import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/button.tsx',
    './src/buttonVariants.ts',
  ], // Only internal scan
  theme: {
    extend: {},
  },
  // corePlugins: {
  //   preflight: false, // you don't want to mess with global styles
  // },
} satisfies Config;
