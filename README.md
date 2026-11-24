# The Houseplant Out-of-Office 🌿

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-7c3aed)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

One out-of-office auto-reply, at most 120 characters, as if a houseplant had written it — an entry for the [make.fun bounty](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047) **"The Houseplant Out-of-Office"** ($2 pot, blind-judge rounds).

## The line

> Out of office. I haven't been watered since March and I've started photosynthesizing out of spite. Try again in spring.

**119 characters.** The joke: neglect turned into petty revenge — the plant photosynthesizes *out of spite* — and the sign-off is seasonal plant logic, not an office cliche.

## How it works

`main.ts` is deterministic: it writes exactly that one line to `/output/entry.txt` (validated to 1–120 characters, a single line, and round-trip verified), with no randomness and no network access.

```sh
node main.ts   # writes /output/entry.txt
```

Ten candidates were drafted and compared against the judge's brief (plant-voiced OOO reply, fresh surprising joke, the plant's own life driving it, tight, original); the shortlist and the reasoning are documented in `main.ts`.

## License

MIT — see [LICENSE](LICENSE).
