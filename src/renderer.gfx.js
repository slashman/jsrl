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
    display: 'pixi'
  });
}
