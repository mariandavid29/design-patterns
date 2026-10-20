import type { Element } from './element.ts'
import type { Visitor } from './visitor/visitor.ts'

export class Table implements Element {
  readonly title: string

  constructor(title: string) {
    this.title = title
  }

  accept(visitor: Visitor): void {
    visitor.visitTable(this)
  }

  render(): void {
    console.log(`Table with title: ${this.title}`)
  }
}
