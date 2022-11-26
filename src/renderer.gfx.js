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
    display: 'pixi',
    displayConfig: {
      tilesetURL: 'assets/gfx/1bitpack_kenney_1.2/colored-transparent_packed.png',
      tilesetCountX: 49,
      tilesetCountY: 22,
      tileSize: 16,

      viewportCountX: 27,
      viewportCountY: 27,
      textboxFontSize: 64,

      transparentTiles: false
    }
  });
}
