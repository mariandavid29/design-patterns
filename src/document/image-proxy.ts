import type { Element } from './element.ts'
import { Image } from './image.ts'
import type { Visitor } from './visitor/visitor.ts'

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

  accept(visitor: Visitor): void {
    visitor.visitImageProxy(this)
  }

  render(): void {
    this.loadImage().render()
  }
}
