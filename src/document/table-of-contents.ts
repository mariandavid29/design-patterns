import type { Element } from './element.ts'
import type { Visitor } from './visitor/visitor.ts'

export class TableOfContents implements Element {
  private readonly entries: string[] = []

  addEntry(title: string): void {
    this.entries.push(title)
  }

  accept(visitor: Visitor): void {
    visitor.visitTableOfContents(this)
  }

  render(): void {
    console.log('Table of Contents')
    for (const entry of this.entries) console.log(`- ${entry}`)
  }
}
