import { ImageProxy } from '../document/image-proxy.ts'
import { Image } from '../document/image.ts'
import { Paragraph } from '../document/paragraph.ts'
import { Section } from '../document/section.ts'
import { Table } from '../document/table.ts'
import { BookStatistics } from '../document/visitor/book-statistics.ts'

export const main = (): void => {
  const cap1 = new Section('Capitolul 1')
  const p1 = new Paragraph('Paragraph 1')
  cap1.add(p1)
  const p2 = new Paragraph('Paragraph 2')
  cap1.add(p2)
  const p3 = new Paragraph('Paragraph 3')
  cap1.add(p3)
  const p4 = new Paragraph('Paragraph 4')
  cap1.add(p4)
  cap1.add(new ImageProxy('ImageOne'))
  cap1.add(new Image('ImageTwo'))
  cap1.add(new Paragraph('Some text'))
  cap1.add(new Table('Table 1'))

  const stats = new BookStatistics()
  cap1.accept(stats)
  stats.printStatistics()
}
