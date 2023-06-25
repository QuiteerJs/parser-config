import { resolve } from 'path'
import { parserConfig } from '@quiteerjs/parser-config'

const filePath = (path: string) => resolve(resolve(), path)

const cjs = filePath('./test-cjs/config.cjs')
const js = filePath('./test-js/config.js')
const json = filePath('./test-json/config.json')
const mjs = filePath('./test-mjs/config.mjs')
const ts = filePath('./test-ts/config.ts')
const yaml = filePath('./test-yaml/config.yaml')

const test = async () => {
  const yamlConfig = await parserConfig(yaml)
  console.log('yamlConfig: ', yamlConfig)

  const jsonConfig = await parserConfig(json)
  console.log('jsonConfig: ', jsonConfig)

  const mjsConfig = await parserConfig(mjs)
  console.log('mjsConfig: ', mjsConfig)

  const jsConfig = await parserConfig(js)
  console.log('jsConfig: ', jsConfig)

  const cjsConfig = await parserConfig(cjs)
  console.log('cjsConfig: ', cjsConfig)

  const tsConfig = await parserConfig(ts)
  console.log('tsConfig: ', tsConfig)

  const rootConfig = await parserConfig(undefined, 'config')
  console.log('rootConfig: ', rootConfig)

  const elctornup = await parserConfig(undefined, 'electronup.config')
  console.log('elctornup: ', JSON.stringify(elctornup))
}
test()
