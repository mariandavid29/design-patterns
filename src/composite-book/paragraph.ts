import type { Element } from './element.ts'

export class Paragraph implements Element {
  readonly text: string

  constructor(text: string) {
    this.text = text
  }

  print(): void {
    console.log(`Paragraph: ${this.text}`)
  }
}
