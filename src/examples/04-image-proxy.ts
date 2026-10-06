import { Book } from '../document/book.ts'
import { ImageProxy } from '../document/image-proxy.ts'
import { Section } from '../document/section.ts'

export const main = (): void => {
  let startTime = performance.now()
  const img1 = new ImageProxy('Pamela Anderson')
  const img2 = new ImageProxy('Kim Kardashian')
  const img3 = new ImageProxy('Kirby Griffin')
  const playboyS1 = new Section('Front Cover')
  playboyS1.add(img1)
  const playboyS2 = new Section('Summer Girls')
  playboyS2.add(img2)
  playboyS2.add(img3)
  const playboy = new Book('Playboy')
  playboy.addContent(playboyS1)
  playboy.addContent(playboyS2)
  let endTime = performance.now()
  console.log(`Creation of the content took ${Math.round(endTime - startTime)} milliseconds`)

  startTime = performance.now()
  playboyS1.print()
  endTime = performance.now()
  console.log(`Printing of the section 1 took ${Math.round(endTime - startTime)} milliseconds`)

  startTime = performance.now()
  playboyS1.print()
  endTime = performance.now()
  console.log(`Printing again the section 1 took ${Math.round(endTime - startTime)} milliseconds`)
}
