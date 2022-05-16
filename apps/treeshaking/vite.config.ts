import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

const packages = ["components", "common"];

const aliases = packages.reduce(
  (alias, pkg) => ({
    ...alias,
    [`${pkg}`]: resolve(__dirname, `../../packages/${pkg}`),
  }),
  {},
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  alias: {
    ...aliases,
  },
  build: {
    minify: false,
  }
})
