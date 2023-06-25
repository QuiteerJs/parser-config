import { defineConfig } from 'tsup'

export default defineConfig(({ watch }) => {
  return {
    name: 'parser-config',
    entry: ['index.ts'],
    minify: !watch,
    dts: true,
    splitting: false,
    clean: true
  }
})
