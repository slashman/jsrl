var Display = require('./Display');
var World = require('./World');
var Player = require('./Player');
var Input = require('./Input');

// Remove after tests
var Item = require('./Item.class');
var Items = require('./Items.enum');
const TestDisplay = require('./TestDisplay');

var Game = {
	start: function(){
		var selectedDisplay = TestDisplay;
		this.display = selectedDisplay;
		this.world = World;
		this.player = Player;
		this.input = Input;
		this.display.init(this);
		Player.init(this);
		World.init(this);
		Input.init(this);
		this.player.updateFOV();
		this.display.refresh();
		this.display.textBox.setText("Welcome to JSRL. Move around using the arrow keys, press comma to get items, [I] to access the inventory, then [U] or Enter to use items and [D] to drop them.");
		Player.addItem(new Item(Items.BOOK_OF_MIRDAS));
		Player.addItem(new Item(Items.IRON_SWORD));
		Player.addItem(new Item(Items.BOOK_OF_MIRDAS));
		Player.addItem(new Item(Items.IRON_SWORD));
		Player.addItem(new Item(Items.SPELL_OF_LOLZORS));
		Player.addItem(new Item(Items.BOOK_OF_AURORA));
	}
}

window.Game = Game;

module.exports = Game;
