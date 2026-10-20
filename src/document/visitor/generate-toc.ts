import type { Section } from '../section.ts'
import { TableOfContents } from '../table-of-contents.ts'
import type { Visitor } from './visitor.ts'

export class GenerateToC implements Visitor {
  private readonly toc = new TableOfContents()

  getToC(): TableOfContents {
    return this.toc
  }

  visitBook(): void {}

  visitSection(section: Section): void {
    this.toc.addEntry(section.title)
  }

  visitTableOfContents(): void {}

  visitParagraph(): void {}

  visitImageProxy(): void {}

  visitImage(): void {}

  visitTable(): void {}
}
