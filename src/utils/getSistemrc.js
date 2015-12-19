import * as fs from 'fs-extra'
import sistemrc from '../default.sistemrc'

export default function getSistemrc () {
  const sistemrcPath = process.cwd() + '/.sistemrc'
  if (!fs.existsSync(sistemrcPath)) {
    console.log('Could not find .sistemrc at', sistemrcPath)
    console.log('Creating new .sistemrc...')
    fs.outputFileSync(sistemrcPath, JSON.stringify(sistemrc, null, 2))
    console.log('.systmrc created:', sistemrcPath)
  }
  return require(sistemrcPath)
}
