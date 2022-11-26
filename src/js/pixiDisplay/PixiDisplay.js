const { Application, Assets, Texture, Rectangle, Sprite, Text } = require('pixi.js');
const PIXITextBox = require('./PIXITextBox.class');

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
		const app = new Application({
			width: config.tileSize * config.viewportCountX,
			height: config.tileSize * config.viewportCountY,
		})
		document.body.appendChild(app.view);
		theCanvas = app.view;
		const spritesheetURL = config.tilesetURL;
		const blackTexture = await Assets.load('assets/gfx/black.png');
		const baseTexture = await Assets.load(spritesheetURL);
		const tileSize = config.tileSize;
		for (let x = 0; x < config.tilesetCountX; x++) {
			for (let y = 0; y < config.tilesetCountY; y++) {
				const spriteTexture = new Texture(
					baseTexture,
					new Rectangle(x * tileSize, y * tileSize, tileSize, tileSize)
				);
				this.textureMap[x+'-'+y] = spriteTexture;
			}
		}
		for (let x = 0; x < config.viewportCountX; x++) {
			for (let y = 0; y < config.viewportCountY; y++) {
				for (let l = 0; l < 3; l++) {
					const sprite = new Sprite(this.textureMap['0-0'])
					app.stage.addChild(sprite);
					this.tileLayers[l][x+'-'+y] = sprite;
					sprite.position.x = x * tileSize;
					sprite.position.y = y * tileSize;
				}
			}
		}
		this.semiViewportCountX = Math.floor(config.viewportCountX / 2);
		this.semiViewportCountY = Math.floor(config.viewportCountY / 2);
		const text = new Text('', {
			fontFamily: 'Kenney Pixel',
			fontSize: config.textboxFontSize,
			fill: 0xdddddd,
			align: 'left',
			wordWrap: true,
			wordWrapWidth: config.tileSize * config.viewportCountX * 4,
			position: {
				x: 10,
				y: 10,
			}
		});
		text.scale.x = 0.25;
		text.scale.y = 0.25;
		app.stage.addChild(text);
		this.textBox = new PIXITextBox(text);

		this.inventoryBackground = new Sprite(blackTexture);
		this.inventoryBackground.width = 106;
		this.inventoryBackground.height = 160;
		this.inventoryBackground.position.x = 246;
		this.inventoryBackground.position.y = 64;
		this.inventoryBackground.visible = false;
		app.stage.addChild(this.inventoryBackground);

		this.inventoryCursor = new Sprite(this.textureMap['24-21']);
		this.inventoryCursor.position.x = 245;
		this.inventoryCursor.visible = false;
		app.stage.addChild(this.inventoryCursor);

		this.inventoryText = new Text('', {
			fontFamily: 'Kenney Pixel',
			fontSize: config.textboxFontSize,
			fill: 0xdddddd,
			align: 'left',
		});
		this.inventoryText.scale.x = 0.25;
		this.inventoryText.scale.y = 0.25;
		app.stage.addChild(this.inventoryText);
		this.inventoryText.visible = false;
		this.inventoryText.position.x = 260;
		this.inventoryText.position.y = 68;

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
		for (var x = -this.semiViewportCountX; x < this.semiViewportCountX; x++) {
			for (var y = -this.semiViewportCountY; y < this.semiViewportCountY; y++) {
				const mapX = player.x + x;
				const mapY = player.y + y;
				const being = this.getBeing(mapX, mapY);
				const item = this.getItem(mapX, mapY);
				const terrain = this.getTerrain(mapX, mapY);
				const beingTexture = being ? this.textureMap[being] : noTexture;
				const itemTexture = item ? this.textureMap[item] : noTexture;
				const terrainTexture = terrain ? this.textureMap[terrain.tilesetData] : noTexture;
				const index = (x+this.semiViewportCountX)+'-'+(y+this.semiViewportCountY);
				this.tileLayers[0][index].texture = terrainTexture;
				if (terrain) {
					if (terrain.variation === 'outOfSight') {
						this.tileLayers[0][index].tint = 0x0000CC;
					} else {
						this.tileLayers[0][index].tint = 0xFFFFFF;
					}
				} 
				this.tileLayers[1][index].texture = itemTexture;
				this.tileLayers[2][index].texture = beingTexture;
			}
		}
	},
	showInventory: function(){
		this.inventoryBackground.visible = true;
		let string = "Inventory\n\n";
		for (var i = 0; i < this.game.player.items.length; i++){
			var item = this.game.player.items[i];
			if (item == this.game.input.selectedItem){
				this.inventoryCursor.position.y = 86 + i * 10;
			}
			string += item.def.name + '\n';

			//this.term.put(item.def.tile, xBase+2, yBase+1+i);
		}
		this.inventoryText.text = string;
		this.inventoryText.visible = true;
		this.inventoryCursor.visible = true;
	},
	hideInventory: function(){
		this.inventoryBackground.visible = false;
		this.inventoryText.visible = false;
		this.inventoryCursor.visible = false;
	},
	message: function(str){
		this.textBox.addText(str);
	}
}
