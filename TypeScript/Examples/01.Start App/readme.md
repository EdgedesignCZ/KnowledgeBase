# TypeScript Start App

This is simply very first application in [TypeScript](http://www.typescriptlang.org/) It show some simple (useless) code, module packaging and some kind of project structure, whoch is probably not the best-practice.

## Requirements

You need to have **node.js** best via `brew install node`, its package manager **npm** via `curl http://npmjs.org/install.sh | sh` and of course **TypeScript** compiler `npm install -g typescript`

## Running

To build & run this "piece of art" just hit your terminal in project root with:
```
tsc ts/project.ts --out public/js/project.js
node node public/js/project.js
```