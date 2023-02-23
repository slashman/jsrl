const ut = (window as any).ut;

import ItemType from './ItemTypes.data';

export default {
	IRON_SWORD: {
		type: ItemType.WEAPON,
		name: 'Iron Sword',
		tile: new ut.Tile('/', 128, 128, 128),
		tilesetData: '32-7'
	},
	BOOK_OF_MIRDAS: {
		type: ItemType.BOOK,
		name: 'Book of Mirdas',
		tile: new ut.Tile('B', 255, 0, 0),
		tilesetData: '45-5'
	},
	BOOK_OF_AURORA: {
		type: ItemType.BOOK,
		name: 'Book of Aurora',
		tile: new ut.Tile('B', 0, 0, 255),
		targetted: true,
		tilesetData: '45-5'
	},
	SPELL_OF_LOLZORS: {
		type: ItemType.SPELL,
		name: 'Spell of Lolzors',
		tile: new ut.Tile('S', 0, 255, 0),
		tilesetData: '45-5'
	}
}