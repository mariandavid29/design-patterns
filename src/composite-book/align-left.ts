import type { AlignStrategy, Context } from './align-strategy.ts'
import type { Paragraph } from './paragraph.ts'

export class AlignLeft implements AlignStrategy {
  render(paragraph: Paragraph, context: Context): string {
    return paragraph.text.padEnd(context.width)
  }
}
