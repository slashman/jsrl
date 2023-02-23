export default {
	init: function(game, config){
		this.game = game;
		this.textBox = {
			setText(str) {
				console.log(str);
			}
		}
	},
	getTerrain: function(x,y){
		var level = this.game.world.level;
		var xr = x - level.player.x;
		var yr = y - level.player.y;
		if (level.player.canSee(xr, yr)){
			if (level.map[x] && level.map[x][y]){
				return level.map[x][y].name;
			} else {
				return 'Nothing';
			}
		} else if (level.player.remembers(x, y)){
			if (level.map[x] && level.map[x][y]){
				return level.map[x][y].name + ' (Dark)';
			} else {
				return '?';
			}
		} else {
			return '?';
		}
	},
	getItem: function(x,y){
		var level = this.game.world.level;
		var xr = x - level.player.x;
		var yr = y - level.player.y;
		if (level.player.canSee(xr, yr)){
			if (level.items[x] && level.items[x][y]){
				return level.items[x][y].def.name;
			} else {
				return 'None';
			}
		} else {
			return '?';
		}
	},
	getBeing: function(x,y){
		var level = this.game.world.level;
		if (x === level.player.x && y === level.player.y){
			return 'Player';
		}
		var xr = x - level.player.x;
		var yr = y - level.player.y;
		if (level.player.canSee(xr, yr)){
			if (level.beings[x] && level.beings[x][y]){
				return level.beings[x][y].tileName;
			} else {
				return 'None';
			}
		} else {
			return '?';
		}
	},
	refresh: function(){
		const player = this.game.world.level.player;
		for (var x = -2; x < 3; x++) {
			for (var y = -2; y < 3; y++) {
				const mapX = player.x + x;
				const mapY = player.y + y;
				var content = '';
				content += 'Being: ' + this.getBeing(mapX, mapY) + '<br>';
				content += 'Item: ' + this.getItem(mapX, mapY) + '<br>';
				content += 'Terrain: ' + this.getTerrain(mapX, mapY);
				document.getElementById('cell'+(x+2)+'-'+(y+2)).innerHTML = content;
			}
		}
	},
	showInventory: function(){
		this.inventoryBox.draw();
		var xBase = 20;
		var yBase = 5;
		this.term.putString("Inventory", xBase, yBase, 255, 0, 0);
		for (var i = 0; i < this.game.player.items.length; i++){
			var item = this.game.player.items[i];
			if (item == this.game.input.selectedItem){
				this.term.put(this.CURSOR_TILE, xBase, yBase+1+i);
			} else {
				this.term.put(this.BLANK_TILE, xBase, yBase+1+i);
			}
			this.term.put(item.def.tile, xBase+2, yBase+1+i);
			this.term.put(item.def.tile, xBase+2, yBase+1+i);
			this.term.putString(item.def.name, xBase + 4, yBase+1+i, 255, 255, 255);
		}
		this.term.render();
	},
	hideInventory: function(){
		this.term.clear();
		this.refresh();
	},
	message: function(str){
		console.log(str);
	},
	titleScreen() {
		console.log("JSRL Sample RL");
	},
	activateNewGame() {
		console.log("Starting new game");
	}
}
