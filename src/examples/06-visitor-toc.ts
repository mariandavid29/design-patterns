import { Author } from '../document/author.ts'
import { Book } from '../document/book.ts'
import { Paragraph } from '../document/paragraph.ts'
import { Section } from '../document/section.ts'
import { Table } from '../document/table.ts'
import { GenerateToC } from '../document/visitor/generate-toc.ts'
import { RenderContentVisitor } from '../document/visitor/render-content-visitor.ts'

export const main = (): void => {
  const cap1 = new Section('Capitolul 1')
  cap1.add(new Paragraph('Moto capitol'))
  const cap11 = new Section('Capitolul 1.1')
  cap11.add(new Paragraph('Text from subchapter 1.1'))
  cap11.add(new Table('Table 1.1'))
  cap1.add(cap11)
  const cap2 = new Section('Capitolul 2')
  cap2.add(new Paragraph('Text from chapter 2'))

  const generateToC = new GenerateToC()
  cap1.accept(generateToC)
  cap2.accept(generateToC)

  const noapteBuna = new Book('Noapte buna, copii!')
  noapteBuna.addAuthor(new Author('Radu Pavel', 'Gheo'))
  noapteBuna.addContent(generateToC.getToC())
  noapteBuna.addContent(cap1)
  noapteBuna.addContent(cap2)

  noapteBuna.accept(new RenderContentVisitor())
}
