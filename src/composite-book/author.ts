export class Author {
  readonly name: string
  readonly surname: string

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }

  print(): void {
    console.log(`Author: ${this.name} ${this.surname}`)
  }
}
