# jsrl
JavaScript Roguelike Template - The basics to start building your own

# What is this?
In this repo you will find a bare-bones roguelike with a character-based display, and tools to bundle it for the web.

Check out the online demo at: https://slashie.net/jsrl

What is this good for? the idea is you take this simple game and start adding what makes your roguelike unique!

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
* `git clone git@github.com:slashman/jsrl.git`
* `cd jsrl`
* `rm -rf .git` (Delete .git folder to start your own adventure)
* Put your game code work within the `./src/js` folder
* Create awesoem gaem

# Local Development Server

Local development can occur in two flavours: *web*, or *electron*. In both environments, changes to your
source are hot-reloaded.

## Web

* `yarn install` or `npm install`
* `yarn run web` or `npm run web`
* Open your browser to `http://localhost:8080`

## Electron

* `yarn install` or `npm install`
* `yarn run electron` or `npm run electron`


# Building and Distribution

Distribution files are also seperated by either *web* or *electron* targets.

## Web

* `yarn run build:web` or `npm run build:web`
* Directory `dist/web` will contain the web directory contents you can serve or FTP

## Electron

* `yarn run package:<one of *win32*, *mac* or *linux*>`
* Directory `dist` will contain the distribution folders for the given platform

# Credits
Uses unicodetiles for IO - http://tapiov.net/unicodetiles.js/

# LICENSE

MIT License

Copyright (c) 2017 Santiago Zapata

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
