import type { Element } from './element.ts'

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

  print(): void {
    console.log(this.title)
    for (const child of this.children) child.print()
  }
}
