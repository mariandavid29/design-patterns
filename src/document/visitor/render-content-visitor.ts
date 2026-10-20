import type { Book } from '../book.ts'
import type { ImageProxy } from '../image-proxy.ts'
import type { Image } from '../image.ts'
import type { Paragraph } from '../paragraph.ts'
import type { Section } from '../section.ts'
import type { TableOfContents } from '../table-of-contents.ts'
import type { Table } from '../table.ts'
import type { Visitor } from './visitor.ts'

export class RenderContentVisitor implements Visitor {
  visitBook(book: Book): void {
    book.render()
  }

  visitSection(section: Section): void {
    section.render()
  }

  visitTableOfContents(tableOfContents: TableOfContents): void {
    tableOfContents.render()
  }

  visitParagraph(paragraph: Paragraph): void {
    paragraph.render()
  }

  visitImageProxy(imageProxy: ImageProxy): void {
    imageProxy.render()
  }

  visitImage(image: Image): void {
    image.render()
  }

  visitTable(table: Table): void {
    table.render()
  }
}
