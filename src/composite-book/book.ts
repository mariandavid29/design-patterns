import type { Author } from './author.ts'
import type { Element } from './element.ts'

export class Book {
  readonly title: string
  private readonly authors: Author[] = []
  private readonly content: Element[] = []

  constructor(title: string) {
    this.title = title
  }

  addAuthor(author: Author): void {
    this.authors.push(author)
  }

  addContent(element: Element): void {
    this.content.push(element)
  }

  print(): void {
    console.log(`Book: ${this.title}`)
    console.log('Authors:')
    for (const author of this.authors) author.print()
    for (const element of this.content) element.print()
  }
}
