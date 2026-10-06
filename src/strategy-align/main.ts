import { AlignCenter } from '../composite-book/align-center.ts'
import { AlignLeft } from '../composite-book/align-left.ts'
import { AlignRight } from '../composite-book/align-right.ts'
import { Paragraph } from '../composite-book/paragraph.ts'
import { Section } from '../composite-book/section.ts'

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

  console.log('Printing without Alignment')
  console.log()
  cap1.print()

  p1.setAlignStrategy(new AlignCenter())
  p2.setAlignStrategy(new AlignRight())
  p3.setAlignStrategy(new AlignLeft())

  console.log()
  console.log('Printing with Alignment')
  console.log()
  cap1.print()
}
