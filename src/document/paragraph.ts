import { defaultContext, type AlignStrategy } from './alignment/align-strategy.ts'
import type { Element } from './element.ts'
import type { Visitor } from './visitor/visitor.ts'

export class Paragraph implements Element {
  readonly text: string
  private alignStrategy: AlignStrategy | undefined

  constructor(text: string) {
    this.text = text
  }

  setAlignStrategy(alignStrategy: AlignStrategy): void {
    this.alignStrategy = alignStrategy
  }

  accept(visitor: Visitor): void {
    visitor.visitParagraph(this)
  }

  render(): void {
    const content = this.alignStrategy?.render(this, defaultContext) ?? this.text
    console.log(`Paragraph: ${content}`)
  }
}
