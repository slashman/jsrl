var Tiles = require('./Tiles.data');
var Races = require('./Races.data');
var Items = require('./Items.data');

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

module.exports = { globalDefs, levelMaps }