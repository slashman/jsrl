# jsrl
JavaScript Roguelike Template - A basic TypeScript roguelike you can build upon to create your own

![PIXI graphics display](./screenshot-pixi.png?raw=true "PIXI graphics display")
![UnicodeTiles character display](./screenshot-unicodeTiles.png?raw=true "UnicodeTiles character display")

# What is this?
JSRL is a bare-bones roguelike featuring both tiles and character-based displays. It can be played via a web browser or as a native app for Windows, Mac, and Linux.

Check out the online demo at: https://slashie.net/jsrl

You can use this simple skeleton game as a starting point for your full-fledged roguelike, by building on top of it and taking advantage of its features:

* Walk around using the keyboard
* Raycasting Field of View algorithm 
* Movement between persistent levels
* Enemies moving around chasing the player
* An action system including actions to pick up, drop, and use items
* Memory of visited areas.
* Infrastructure for Level Generation
* Line wrap text boxes

# Development philosophy

The unique goal of JSRL is to provide an advanced "starting point" for your project and then NOT get in your way. That is why it isn't structured as an engine whose abstractions you have to learn in order to build upon it, but rather as a small set of classes and objects that you will very likely progressively replace with your own.

JSRL-based projects are completely detached from the JSRL template; once you start developing your project you are on your own. In other words, the main thing you have to understand is that JSRL is just a sample roguelike.

The development of JSRL is driven by developers optionally back-porting the improvements made while developing their own games into it; contributions are cherry-picked for JSRL to remain as simple as possible while providing future developers with added utilities for their games. (An example is the addition of automatic viewport scaling).

As you can see in the JSRL demo, you will get quite a boost with tile-based display, keyboard-based movement, level handling, a turns system controlling the sequence of the actions of simulated world populators, and a simple inventory.

Along with that you also get all the tooling to develop the game and deploy it for web or PC via electron.

# How to use

JSRL is designed for you to take a snapshot of the repository, and then part ways with it to create your game.

Tutorials on how to create your game around the basic codebase will come soon.

* Download a copy of the repository (https://github.com/slashman/jsrl/archive/refs/heads/master.zip).
  * Alternatively you can use github's Template feature https://github.com/slashman/jsrl/generate
* Modify the code within the `./src/ts` folder to create your game.

# TypeScript

JSRL uses typescript and includes the tools to compile it so it can be used in any browser.

In case you want to remove TypeScript support and dependencies, you can use the `js` branch. However, note that you can develop in vanilla JS if you wanted, even with typescript active.

# Local Development Server

Local development can occur in two flavours: *web*, or *electron*. In both environments, changes to your source are hot-reloaded.

## Web

* `npm install`
* `npm run web` OR `npm run web:pixi`
* Open your browser to `http://localhost:8080`

## Electron

* `npm install`
* `npm run electron` OR `npm run electron:pixi`

# Building and Distribution

Distribution files are also seperated by either *web* or *electron* targets.

## Web

* `npm run build:web` OR `npm run build:web:pixi`
* Directory `dist/web` will contain the web directory contents you can serve or FTP

## Electron

* `npm run package:<one of *win32*, *mac* or *linux*>` OR `npm run package:<one of *win32*, *mac* or *linux*>:pixi`
* Directory `dist` will contain the distribution folders for the given platform

# Version History
* 0.0.5 - February 23, 2023 - Migration to TypeScript
* 0.0.4 - November 26, 2022 - PIXI graphical version
* 0.0.3 - November 19, 2022 - Electron packaging, viewport scaling
* 0.0.2 - March 2021 - Added support for static maps loading
* 0.0.1 - November 2017 - Initial version based on PokemonRL codebase

# Credits
* Uses unicodetiles for IO - https://tapiov.net/unicodetiles.js/
* Uses PIXI.JS for display

# LICENSE

MIT License

Copyright (c) 2017-2023 Santiago Zapata

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
