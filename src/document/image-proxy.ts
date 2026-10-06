import type { Element } from './element.ts'
import { Image } from './image.ts'

export class ImageProxy implements Element {
  readonly url: string
  private realImage: Image | undefined

  constructor(url: string) {
    this.url = url
  }

  private loadImage(): Image {
    this.realImage ??= new Image(this.url)
    return this.realImage
  }

  print(): void {
    this.loadImage().print()
  }
}
