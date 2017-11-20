var Tiles = require('./Tiles.enum');
var Races = require('./Races.enum');
var Items = require('./Items.enum');
var Being = require('./Being.class');
var Item = require('./Item.class');
var Random = require('./Random');

module.exports = {
	generateTestLevel: function(level, fromId){
		for (var x = 0; x < 40; x++){
			level.map[x] = [];
			for (var y = 0; y < 40; y++){
				level.map[x][y] = Tiles.GRASS;
			}
		}
		for (var i = 0; i < 40; i++){
			level.map[Random.n(0,39)][Random.n(0,39)] = Tiles.BUSH;
		}
		for (var i = 0; i < 40; i++){
			level.map[Random.n(0,39)][Random.n(0,39)] = Tiles.WATER;
		}
		for (var i = 0; i < 5; i++){
			var being = new Being(level.game, level, Races.RAT);
			level.addBeing(being, Random.n(0,39), Random.n(0,39));
			being.intent = 'RANDOM';
			being = new Being(level.game, level, Races.TROLL);
			level.addBeing(being, Random.n(0,39), Random.n(0,39));
			being.intent = 'CHASE';
		}
		level.addItem(new Item(Items.IRON_SWORD), Random.n(0,39), Random.n(0,39));
		level.addItem(new Item(Items.BOOK_OF_MIRDAS), Random.n(0,39), Random.n(0,39));
		if (fromId){
			var xs = Random.n(0,39);
			var ys = Random.n(0,39);
			level.addExit(xs, ys, fromId, Tiles.STAIRS_DOWN);
			level.player.x = xs;
			level.player.y = ys;
		}
		level.addExit(Random.n(0,39),Random.n(0,39),'test'+Random.n(0,1000), Tiles.STAIRS_UP);
	}
}