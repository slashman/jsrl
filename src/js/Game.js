/**
 * Single object that controls the initialization of the 
 * game and serves as a container for its main subsystems (Display, World, Player and Input)
 * 
 */

const UnicodeTilesDisplay = require('./display/unicodeTilesDisplay/UnicodeTilesDisplay');
const PIXIDisplay = require('./display/pixiDisplay/PixiDisplay');
const TestDisplay = require('./display/TestDisplay');

var World = require('./model/World');
var Player = require('./model/Player');
var Input = require('./Input');

var Item = require('./model/Item.class');
var Items = require('./data/Items.data');

var Game = {
	start: async function(config){
		let selectedDisplay;
		switch (config.display) {
			case 'pixi':
				selectedDisplay = PIXIDisplay;
				break;
			case 'test':
				selectedDisplay = TestDisplay;
				break;
			case 'unicodeTiles':
			default:
				selectedDisplay = UnicodeTilesDisplay;
				break;
		}

		this.display = selectedDisplay;
		this.world = World;
		this.player = Player;
		this.input = Input;
		await this.display.init(this, config.displayConfig);
		Player.init(this);
		World.init(this);
		Input.init(this);
		this.display.titleScreen();
	},
	newGame: function () {
		this.player.updateFOV();
		this.display.refresh();
		this.display.textBox.setText("Welcome to JSRL. Move around using the arrow keys, press comma to get items, [I] to access the inventory, then [U] or Enter to use items and [D] to drop them.");
		Player.addItem(new Item(Items.BOOK_OF_MIRDAS));
		Player.addItem(new Item(Items.IRON_SWORD));
		Player.addItem(new Item(Items.BOOK_OF_MIRDAS));
		Player.addItem(new Item(Items.IRON_SWORD));
		Player.addItem(new Item(Items.SPELL_OF_LOLZORS));
		Player.addItem(new Item(Items.BOOK_OF_AURORA));
		this.display.activateNewGame();
	}
}

window.Game = Game;

module.exports = Game;
