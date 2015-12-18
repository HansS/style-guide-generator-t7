import * as fs from 'fs-extra'
import * as path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import configure from './configure'

export default function generate (page, name) {
  const configPath = process.cwd() + '/.sistemrc'

  if (!fs.existsSync(configPath)) {
    console.log('Could not find .systemrc at', configPath)
    console.log('Creating new .systemrc...')
    const defaultConfig = configure()
    fs.outputFileSync(configPath, defaultConfig)
    console.log('.systmrc created:', configPath)
  }

  const config = require(configPath)
  const Page = React.createElement(page, config)
  const html = '<!doctype html>' + ReactDOMServer.renderToStaticMarkup(Page)

  fs.outputFileSync(process.cwd() + '/sistem/' + name + '.html', html)

}
