import type { Element } from './element.ts'
import type { Visitor } from './visitor/visitor.ts'

const LOAD_DELAY_MS = 5000

// Blocks the thread like Java's sleep, simulating a heavy image load.
const sleepSync = (ms: number): void => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms)
}

export class Image implements Element {
  readonly url: string

  constructor(url: string) {
    this.url = url
    sleepSync(LOAD_DELAY_MS)
  }

  accept(visitor: Visitor): void {
    visitor.visitImage(this)
  }

  render(): void {
    console.log(`Image with url: ${this.url}`)
  }
}
