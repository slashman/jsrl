import './css/styles.css';
import {printEnvironment} from './environment';
import Game from './ts/Game';

window.onload = () => {
  printEnvironment()

  Game.start({
    display: 'pixi',
    displayConfig: {
      tilesetURL: './assets/gfx/1bitpack_kenney_1.2/colored-transparent_packed.png',
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
