import type { Visitor } from './visitor/visitor.ts'

export interface Element {
  accept(visitor: Visitor): void
}
