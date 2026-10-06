import type { Paragraph } from '../paragraph.ts'

export interface Context {
  readonly width: number
}

export const defaultContext: Context = { width: 30 }

export interface AlignStrategy {
  render(paragraph: Paragraph, context: Context): string
}
