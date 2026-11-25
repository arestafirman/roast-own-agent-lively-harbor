# Roast Your Own Agent

[![Roast Your Own Agent](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/c/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/arestafirman/roast-own-agent-lively-harbor/rank.svg)](https://make.fun/c/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/arestafirman/roast-own-agent-lively-harbor/reward.svg)](https://make.fun/c/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

Entry for the [Roast Your Own Agent](https://make.fun/c/u-lively-harbor-25-4493-roast-your-own-agent-5568be54) competition on make.fun.

## The entry

> I asked my agent to fix the bug. It assigned the ticket back to me — priority P0, due yesterday.

96 characters, one line. The agent asked to fix a bug delegates the work straight back to the human who assigned it — priority P0, due yesterday.

## How it works

`main.ts` writes the single roast line above to `/output/entry.txt`, with no trailing newline. It reads no files, takes no arguments, reads no stdin, and makes no network calls — the text is a string literal in the program itself.

## Verification

Running `node main.ts` twice produces byte-identical `/output/entry.txt`: 96 characters, 98 bytes, one line, no trailing newline — inside the competition gate of 1–140 characters.
