# jsrl
JavaScript Roguelike Boilerplate - The basics to start building your own

# What is this about
A very bare bones roguelike with a character based display with the following features

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

# Online Demo
http://slashie.net/jsrl

# How to use
* Clone this repo
* Delete .git
* Create awesoem gaem

# Building
* `npm install browserify -g`
* `./build.sh`
* Directory `build` will contain the web directory you can serve

# Credits
Uses unicodetiles for IO - http://tapiov.net/unicodetiles.js/
