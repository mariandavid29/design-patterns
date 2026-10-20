import type { Book } from '../book.ts'
import type { ImageProxy } from '../image-proxy.ts'
import type { Image } from '../image.ts'
import type { Paragraph } from '../paragraph.ts'
import type { Section } from '../section.ts'
import type { TableOfContents } from '../table-of-contents.ts'
import type { Table } from '../table.ts'

export interface Visitor {
  visitBook(book: Book): void
  visitSection(section: Section): void
  visitTableOfContents(tableOfContents: TableOfContents): void
  visitParagraph(paragraph: Paragraph): void
  visitImageProxy(imageProxy: ImageProxy): void
  visitImage(image: Image): void
  visitTable(table: Table): void
}
