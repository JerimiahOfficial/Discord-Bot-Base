import { readdir } from 'node:fs/promises'
import { join } from 'node:path'

import Logger from './logger'

export default async function Load<T> (directory: string, register: (o: T) => void): Promise<void> {
  Logger(`Loading ${directory}`, 'cyan')
  const path = Bun.main.substring(0, Bun.main.lastIndexOf('\\')) + "\\" + directory
  const files = await readdir(path)

  await Promise.all(
    files.map(async file => {
      try {
        const { default: object } = await import(join(path, file)) as { default: T | undefined }

        if (object === undefined) return

        register(object)
        Logger(`[+] ${file} loaded.`, 'cyan')
      } catch (err) {
        Logger(`[-] ${file} failed to load.`, 'red')

        if (err instanceof Error) Logger(err.message, 'red')
      }
    })
  )
}
