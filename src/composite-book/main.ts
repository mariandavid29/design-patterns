import { Author } from './author.ts'
import { Book } from './book.ts'
import { Image } from './image.ts'
import { Paragraph } from './paragraph.ts'
import { Section } from './section.ts'

export const main = (): void => {
  const noapteBuna = new Book('Noapte buna, copii!')
  const rpGheo = new Author('Radu Pavel', 'Gheo')
  noapteBuna.addAuthor(rpGheo)

  const cap1 = new Section('Capitolul 1')
  const cap11 = new Section('Capitolul 1.1')
  const cap111 = new Section('Capitolul 1.1.1')
  const cap1111 = new Section('Subchapter 1.1.1.1')

  noapteBuna.addContent(new Paragraph('Multumesc celor care ...'))
  noapteBuna.addContent(cap1)
  cap1.add(new Paragraph('Moto capitol'))
  cap1.add(cap11)
  cap11.add(new Paragraph('Text from subchapter 1.1'))
  cap11.add(cap111)
  cap111.add(new Paragraph('Text from subchapter 1.1.1'))
  cap111.add(cap1111)
  cap1111.add(new Image('Image subchapter 1.1.1.1'))

  noapteBuna.print()
}
