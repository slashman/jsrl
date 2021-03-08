var Tiles = require('./Tiles.enum');
var Races = require('./Races.enum');
var Items = require('./Items.enum');
var Being = require('./Being.class');
var Item = require('./Item.class');
var Random = require('./Random');

module.exports = {
	generateTestLevel: function(level, fromId, nextLevelId){
		for (var x = 0; x < 80; x++){
			level.map[x] = [];
			for (var y = 0; y < 25; y++){
				level.map[x][y] = Tiles.GRASS;
			}
		}
		for (var i = 0; i < 40; i++){
			level.map[Random.n(0,79)][Random.n(0,24)] = Tiles.BUSH;
		}
		for (var i = 0; i < 40; i++){
			level.map[Random.n(0,79)][Random.n(0,24)] = Tiles.WATER;
		}
		for (var i = 0; i < 5; i++){
			var being = new Being(level.game, level, Races.RAT);
			level.addBeing(being, Random.n(0,79), Random.n(0,24));
			being.intent = 'RANDOM';
			being = new Being(level.game, level, Races.TROLL);
			level.addBeing(being, Random.n(0,79), Random.n(0,24));
			being.intent = 'CHASE';
		}
		level.addItem(new Item(Items.IRON_SWORD), Random.n(0,79), Random.n(0,25));
		level.addItem(new Item(Items.BOOK_OF_MIRDAS), Random.n(0,79), Random.n(0,25));
		if (fromId){
			var xs = Random.n(0,79);
			var ys = Random.n(0,25);
			level.addExit(xs, ys, fromId, Tiles.STAIRS_DOWN);
			level.player.x = xs;
			level.player.y = ys;
		}
		level.addExit(Random.n(0,79),Random.n(0,25),nextLevelId, Tiles.STAIRS_UP);
	}
}