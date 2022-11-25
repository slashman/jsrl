const { Application, Assets, Texture, Rectangle, Sprite } = require('pixi.js');

let theCanvas;

function resizeCanvas () {
	if (!theCanvas) {
		return;
	}
	const padding = 0;
	const aspectRatio = theCanvas.height / theCanvas.width;
	if (innerWidth * aspectRatio <= innerHeight) {
		theCanvas.style.width = (innerWidth - padding) + "px"; 
		theCanvas.style.height = (innerWidth * aspectRatio - padding) + "px";
	} else {
		theCanvas.style.width = (innerHeight * 1/aspectRatio - padding)+ "px"; 
		theCanvas.style.height = (innerHeight - padding) + "px";
	}
}

window.addEventListener("resize", resizeCanvas);

module.exports = {
	init: async function(game, config){
		this.textureMap = {};
		this.tileLayers = [
			[],[],[]
		];
		this.game = game;
		const app = new Application();
		document.body.appendChild(app.view);
		theCanvas = app.view;
		const spritesheetURL = '1bitpack_kenney_1.2/colored-transparent_packed.png';
		const baseTexture = await Assets.load(spritesheetURL);
		for (let x = 0; x < 49; x++) {
			for (let y = 0; y < 22; y++) {
				const spriteTexture = new Texture(
					baseTexture,
					new Rectangle(x * 16, y * 16, 16, 16)
				);
				this.textureMap[x+'-'+y] = spriteTexture;
			}
		}
		for (let x = 0; x < 50; x++) {
			for (let y = 0; y < 37; y++) {
				for (let l = 0; l < 3; l++) {
					const sprite = new Sprite(this.textureMap['0-0'])
					app.stage.addChild(sprite);
					this.tileLayers[l][x+'-'+y] = sprite;
					sprite.position.x = x * 16;
					sprite.position.y = y * 16;
				}
			}
		}
		this.textBox = {
			setText(str) {
				console.log(str);
			}
		}
		resizeCanvas();
	},
	getTerrain: function(x,y){
		var level = this.game.world.level;
		var xr = x - level.player.x;
		var yr = y - level.player.y;
		if (level.player.canSee(xr, yr)){
			if (level.map[x] && level.map[x][y]){
				return {
					tilesetData: level.map[x][y].tilesetData
				}
			} else {
				return null;
			}
		} else if (level.player.remembers(x, y)){
			if (level.map[x] && level.map[x][y]){
				return {
					tilesetData: level.map[x][y].tilesetData,
					variation: 'outOfSight'
				}
			} else {
				return null;
			}
		} else {
			return null;
		}
	},
	getItem: function(x,y){
		var level = this.game.world.level;
		var xr = x - level.player.x;
		var yr = y - level.player.y;
		if (level.player.canSee(xr, yr)){
			if (level.items[x] && level.items[x][y]){
				return level.items[x][y].def.tilesetData;
			} else {
				return null;
			}
		} else {
			return null;
		}
	},
	getBeing: function(x,y){
		var level = this.game.world.level;
		if (x === level.player.x && y === level.player.y){
			return '28-0';
		}
		var xr = x - level.player.x;
		var yr = y - level.player.y;
		if (level.player.canSee(xr, yr)){
			if (level.beings[x] && level.beings[x][y]){
				return level.beings[x][y].tilesetData;
			} else {
				return null;
			}
		} else {
			return null;
		}
	},
	refresh: function(){
		const player = this.game.world.level.player;
		const noTexture = this.textureMap['0-0'];
		for (var x = -18; x < 19; x++) {
			for (var y = -18; y < 19; y++) {
				const mapX = player.x + x;
				const mapY = player.y + y;
				const being = this.getBeing(mapX, mapY);
				const item = this.getItem(mapX, mapY);
				const terrain = this.getTerrain(mapX, mapY);
				const beingTexture = being ? this.textureMap[being] : noTexture;
				const itemTexture = item ? this.textureMap[item] : noTexture;
				const terrainTexture = terrain ? this.textureMap[terrain.tilesetData] : noTexture;
				this.tileLayers[0][(x+18)+'-'+(y+18)].texture = terrainTexture;
				if (terrain) {
					if (terrain.variation === 'outOfSight') {
						this.tileLayers[0][(x+18)+'-'+(y+18)].tint = 0x0000CC;
					} else {
						this.tileLayers[0][(x+18)+'-'+(y+18)].tint = 0xFFFFFF;
					}
				} 
				this.tileLayers[1][(x+18)+'-'+(y+18)].texture = itemTexture;
				this.tileLayers[2][(x+18)+'-'+(y+18)].texture = beingTexture;
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
	}
}
