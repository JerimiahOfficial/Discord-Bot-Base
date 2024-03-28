import { readdirSync } from 'node:fs'
import { join } from 'node:path'

import Logger from './logger'

export default async function Load<T> (directory: string, register: (o: T) => void): Promise<void> {
  Logger('cyan', `\nLoading ${directory}...`)
  const files = readdirSync(join(__dirname, '..', directory))

  await Promise.all(
    files.map(async file => {
      try {
        const { default: object } = await import(join(__dirname, '..', directory, file)) as { default: T | undefined }

        if (object === undefined) return

        register(object)
        Logger('green', `[+] ${file} loaded.`)
      } catch {
        Logger('red', `[-] ${file} failed to load.`)
      }
    })
  )
}
