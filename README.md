# JSRL
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


# Building Distribution

Distribution files are also seperated by either *web* or *electron*.

## Web

* `yarn run build:web` or `npm run build:web`
* Directory `dist/web` will contain the web directory you can serve or FTP

## Electron

* `yarn run package:<one of *win32*, *mac* or *linux*>`
* Directory `dist` will contain the distribution folders for the given platform

# Credits
Uses unicodetiles for IO - http://tapiov.net/unicodetiles.js/
