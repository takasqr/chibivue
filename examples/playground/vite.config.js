import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const dirname = path.dirname(fileURLToPath(new URL(import.meta.url)))
export default defineConfig({
  resolve: {
    alias: {
      // chibivue を import して使うため
      // import { helloChibivue } from "chibivue";
      chibivue: path.resolve(dirname, '../../packages'),
    },
  },
})