import * as fs from 'fs-extra'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import getSistemrc from './getSistemrc'

export default function generate (options) {
  const view = options.view
  const name = options.name
  const View = React.createElement(view, getSistemrc())
  const html = '<!doctype html>' + ReactDOMServer.renderToStaticMarkup(View)
  fs.outputFileSync(process.cwd() + '/sistem/' + name + '.html', html)
}
