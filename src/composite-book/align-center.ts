import type { AlignStrategy, Context } from './align-strategy.ts'
import type { Paragraph } from './paragraph.ts'

export class AlignCenter implements AlignStrategy {
  render(paragraph: Paragraph, context: Context): string {
    const { text } = paragraph
    const left = Math.floor((context.width - text.length) / 2)
    return text.padStart(text.length + left).padEnd(context.width)
  }
}
