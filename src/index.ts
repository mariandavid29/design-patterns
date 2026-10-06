import { main as CompositeBookMain } from './examples/01-composite-book.ts'
import { main as StrategyAlignMain } from './examples/02-strategy-align.ts'
import { main as ImageLoadingMain } from './examples/03-image-loading.ts'
import { main as ImageProxyMain } from './examples/04-image-proxy.ts'

const examples = new Map<string, () => void>([
  ['composite', CompositeBookMain],
  ['strategy', StrategyAlignMain],
  ['image-loading', ImageLoadingMain],
  ['image-proxy', ImageProxyMain],
])

const name = process.argv[2]

if (name === undefined) {
  for (const [exampleName, run] of examples) {
    console.log(`--- ${exampleName} ---`)
    run()
    console.log()
  }
} else {
  const run = examples.get(name)
  if (run) {
    run()
  } else {
    console.error(`Unknown example "${name}". Available: ${[...examples.keys()].join(', ')}`)
    process.exitCode = 1
  }
}
