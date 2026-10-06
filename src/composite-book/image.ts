import type { Element } from './element.ts'

export class Image implements Element {
  readonly url: string

  constructor(url: string) {
    this.url = url
  }

  print(): void {
    console.log(`Image with url: ${this.url}`)
  }
}
