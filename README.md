# jsrl
JavaScript Roguelike Template - A basic roguelike you can build upon to create your own

![PIXI graphics display](./screenshot-pixi.png?raw=true "PIXI graphics display")
![UnicodeTiles character display](./screenshot-unicodeTiles.png?raw=true "UnicodeTiles character display")


# What is this?
In this repo you will find a bare-bones roguelike with tile and character-based displays, and tools to bundle it for the web or as an executable.

Check out the online demo at: https://slashie.net/jsrl

What is this good for? the idea is: you take this simple game and start adding and transforming it into what makes your roguelike unique!

# Features
* Player can walk around
* Raycasting Field of View algorithm 
* Player can move between persistent levels
* Enemies move around chasing the player
* Player can pick up, drop and use items (including using items on a given direction)
* Player remember visited maps
* A simple Being class based on Races definitions, with random and follow player intents
* A simple Item class based on Item Type definitions
* Infrastructure for Level Generation
* Line wrap text boxes

# How to use

JSRL is designed for you to take a snapshot of the repository, and then part ways with it
to create your game.

Tutorials on how to create your game around the basic codebase will come soon.

* Download a copy of the repository (https://github.com/slashman/jsrl/archive/refs/heads/master.zip).
* Modify the code within the `./src/js` folder to create your game.

# Local Development Server

Local development can occur in two flavours: *web*, or *electron*. In both environments, changes to your
source are hot-reloaded.

## Web

* `npm install`
* `npm run web` OR `npm run webGFX`
* Open your browser to `http://localhost:8080`

## Electron

* `npm install`
* `npm run electron` OR `npm run electronGFX`

# Building and Distribution

Distribution files are also seperated by either *web* or *electron* targets.

## Web

* `npm run build:web` OR `npm run build:webGFX`
* Directory `dist/web` will contain the web directory contents you can serve or FTP

## Electron

* `npm run package:<one of *win32*, *mac* or *linux*>` OR `npm run package:<one of *win32*, *mac* or *linux*>GFX`
* Directory `dist` will contain the distribution folders for the given platform

# Version History
* 0.0.4 - November 26, 2022 - PIXI graphical version
* 0.0.3 - November 19, 2022 - Electron packaging, viewport scaling
* 0.0.2 - March 2021 - Added support for static maps loading
* 0.0.1 - November 2017 - Initial version based on PokemonRL codebase

# Credits
* Uses unicodetiles for IO - https://tapiov.net/unicodetiles.js/
* Uses PIXI.JS for display

# LICENSE

MIT License

Copyright (c) 2017-2022 Santiago Zapata

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
