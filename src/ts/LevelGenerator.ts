/**
 * Sample object for "procedural generation".
 * 
 * Used by the World object whenever a level needs to be generated.
 */

import Tiles from './data/Tiles.data';
import Races from './data/Races.data';
import Items from './data/Items.data';
import Being from './model/Being.class';
import Item from './model/Item.class';
import Random from './Random';

export default {
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
			let being = new Being(level.game, level, Races.RAT);
			level.addBeing(being, Random.n(0,79), Random.n(0,24));
			being.setIntent('RANDOM');
			being = new Being(level.game, level, Races.TROLL);
			level.addBeing(being, Random.n(0,79), Random.n(0,24));
			being.setIntent('CHASE');
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