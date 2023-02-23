/**
 * Represents an inanimate object that can be picked up by
 * the player and droped into the level.
 * 
 * @param {*} def ItemDefinition describing the attributes of a particular type of item.
 */

function Item(def){
	this.def = def;
}

Item.prototype = {
	// JSRL Doesn't define any specific behavior for items.
}

export default Item;