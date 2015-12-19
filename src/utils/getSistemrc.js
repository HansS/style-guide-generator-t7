import * as fs from 'fs-extra'
import defaultSistemrc from '../default.sistemrc'

export default function () {
  const sistemrcPath = process.cwd() + '/.sistemrc'
  if (!fs.existsSync(sistemrcPath)) {
    console.log('Could not find .sistemrc at', sistemrcPath)
    console.log('Creating new .sistemrc...')
    fs.outputFileSync(sistemrcPath, JSON.stringify(defaultSistemrc, null, 2))
    console.log('.systmrc created:', sistemrcPath)
  }
  var sistemrc = JSON.parse(fs.readFileSync(sistemrcPath, 'utf8'))
  return sistemrc
}
