# jsrl
JavaScript Roguelike Template - The basics to start building your own

![JSRL screenshot](./screenshot.png?raw=true "JSRL")

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
* `rm -rf .git` (Delete .git folder)
* Create awesoem gaem

# Local Development Server

* `yarn install` or `npm install`
* `yarn start` or `npm start`
* Open your browser to `http://localhost:1234`

# Building Distribution
* `yarn run build` or `npm run build`
* Directory `dist` will contain the web directory you can serve

# Building Distribution as a Desktop Application
* Support has been added to make use of Electron for creating desktop builds of your JSRL app!
* `yarn run package-<platform name>` where `<platform-name>` is `win32`, `linux`, or `mac` (aka. `yarn run package-win32`)
* Output will be in `dist-builds` folder, just zip and distribute!
* If you need to customize packaging options - https://github.com/electron/electron-packager/blob/main/usage.txt

# Credits
* Uses unicodetiles for IO - https://tapiov.net/unicodetiles.js/
