var Tiles = require('./Tiles.enum');
var Races = require('./Races.enum');
var Items = require('./Items.enum');
var Being = require('./Being.class');
var Item = require('./Item.class');

const globalDefs = [
	{ char: '$', tile: Tiles.STAIRS_DOWN, start: true },
	{ char: '.', tile: Tiles.GRASS },
	{ char: '#', tile: Tiles.BUSH },
	{ char: ' ', tile: Tiles.WATER },
	{ char: 'T', tile: Tiles.GRASS, being: Races.TROLL },
	{ char: 'B', tile: Tiles.GRASS, item: Items.BOOK_OF_MIRDAS }
];

const levelMaps = {
	test: {
		defs: [
			{ char: '>', tile: Tiles.STAIRS_UP, exitTo: 'test2' }
		],
		map: [
			"                              ",
			"                              ",
			"                              ",
			"          ##########          ",
			"          #.T......#          ",
			"          #......$.#          ",
			"          #.B......#          ",
			"          #........#          ",
			"          ####.#####          ",
			"             #.#              ",
			"             #.#              ",
			"             #.#              ",
			"             #.#              ",
			"             #.#              ",
			"            ##.##             ",
			"           ##...##            ",
			"           #..>..#            ",
			"           ##...##            ",
			"            ##.##             ",
			"             ###              ",
		]
	},
	test2: {
		defs: [],
		map: [
			"                              ",
			"                              ",
			"                              ",
			"             ###              ",
			"            ##.##             ",
			"           ##...##            ",
			"           #..$..#            ",
			"           ##...##            ",
			"            ##.##             ",
			"             ###              ",
		]
	}
}

module.exports = {
	loadLevel: function(level, mapId, fromId){
		const map = levelMaps[mapId];
		level.map = [];
		const defsMap = {};
		const defsList = globalDefs.concat(map.defs);
		for (var y = 0; y < map.map.length; y++){
			for (var x = 0; x < map.map[0].length; x++){
				if (!level.map[x]) {
					level.map[x] = [];
				}
				const mapChar = map.map[y].charAt(x);
				let def = defsMap[mapChar];
				if (!def) {
					def = defsList.find(def => def.char == mapChar);
					defsMap[mapChar] = def;
				}
				level.map[x][y] = def.tile;
				if (def.item) {
					level.addItem(new Item(def.item), x, y);
				}
				if (def.being) {
					var being = new Being(level.game, level, def.being);
					level.addBeing(being, x, y);
					being.intent = 'RANDOM';
				}
				if (def.exitTo) {
					level.addExit(x, y, def.exitTo, def.tile);
				}
				if (def.start) {
					level.addExit(x, y, fromId, def.tile);
					level.player.x = x;
					level.player.y = y;
				}

			}
		}
	}
}