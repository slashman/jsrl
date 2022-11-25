// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.



import './css/styles.css';
import {isBrowser} from './environment';
import Game from './js/Game';

window.onload = () => {
  console.log('JSRL game starting.');
  
  if (isBrowser()) {
    console.log('Running in browser mode.');
  } else {
    console.log('Running in electron mode.');
  }
  Game.start({
    display: 'unicodeTiles'
  });
}
