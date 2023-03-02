/**
 * Determines the types of items, as well as the script when using
 * them.
 */

export default {
	WEAPON: {
		name: 'Weapon',
		useFunction: function(game, item){
			game.display.message("You wield the "+item.def.name);
		}
	},
	BOOK: {
		name: 'Book',
		useFunction: function(game, item){
			game.display.message("You read the "+item.def.name);
		}
	},
	SPELL: {
		name: 'Spell',
		targetted: true,
		useFunction: function(game, item, dx, dy){
			game.display.message("You cast the "+item.def.name+" in direction x "+dx+" y "+dy);
		}
	}
}