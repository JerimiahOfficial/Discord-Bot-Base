import { readdirSync } from 'node:fs'
import { join } from 'node:path'

import Logger from './Logger.js'

export default async function Load<T> (directory: string, register: (o: T) => void): Promise<void> {
  Logger('cyan', `\nLoading ${directory}...`)
  const files = readdirSync(`./dist/${directory}/`)

  for (const file of files) {
    try {
      const { default: object } = await import(join(__dirname, '..', directory, file)) as { default: T | undefined }

      if (object === undefined) return

      register(object)
      Logger('cyan', `[+] ${file} loaded.`)
    } catch {
      Logger('red', `[-] ${file} failed to load.`)
    }
  }
}
