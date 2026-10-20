import type { Visitor } from './visitor.ts'

export class BookStatistics implements Visitor {
  private imagesCount = 0
  private tablesCount = 0
  private paragraphsCount = 0

  visitBook(): void {}

  visitSection(): void {}

  visitTableOfContents(): void {}

  visitParagraph(): void {
    this.paragraphsCount++
  }

  // Counted without touching the proxy, so the real image is never loaded.
  visitImageProxy(): void {
    this.imagesCount++
  }

  visitImage(): void {
    this.imagesCount++
  }

  visitTable(): void {
    this.tablesCount++
  }

  printStatistics(): void {
    console.log('Book Statistics:')
    console.log(`*** Number of images: ${this.imagesCount}`)
    console.log(`*** Number of tables: ${this.tablesCount}`)
    console.log(`*** Number of paragraphs: ${this.paragraphsCount}`)
  }
}
