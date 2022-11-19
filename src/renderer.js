// This file is required by the index.html file and will
// be executed in the renderer process for that window.
//
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


import './css/styles.css'
import {isBrowser} from './environment'
import Game from './js/Game'

window.onload = () => {
  console.log('starting client')
  
  if (isBrowser()) {
    console.log('running in the browser')
  } else {
    console.log('running in electron')
  }

  Game.start()
}
