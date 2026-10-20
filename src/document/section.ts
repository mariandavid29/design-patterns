import type { Element } from './element.ts'
import type { Visitor } from './visitor/visitor.ts'

export class Section implements Element {
  readonly title: string
  private readonly children: Element[] = []

  constructor(title: string) {
    this.title = title
  }

  add(element: Element): void {
    this.children.push(element)
  }

  remove(element: Element): void {
    const index = this.children.indexOf(element)
    if (index !== -1) this.children.splice(index, 1)
  }

  get(index: number): Element | undefined {
    return this.children[index]
  }

  // The section is the composite, so it carries the visitor down to its children.
  accept(visitor: Visitor): void {
    visitor.visitSection(this)
    for (const child of this.children) child.accept(visitor)
  }

  render(): void {
    console.log(this.title)
  }
}
