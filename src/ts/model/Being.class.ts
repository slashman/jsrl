/**
 * Represent an "alive" entity that moves around the world
 * and can be interacted with by the player.
 * 
 */

import Random from '../Random';
import Level from './Level.class';

export default class Being {
	private game: any;
	private level: Level;
	private tile: any;
	private tileName: string;
	private tilesetData: any;
	private xPosition: number;
	private yPosition: number;
	private intent: string;

	get x(): number {
		return this.xPosition;
	}

	get y(): number {
		return this.yPosition;
	}

	constructor (game: any, level: Level, race: any) {
		this.game = game;
		this.level = level;
		this.tile = race.tile;
		this.tileName = race.name;
		this.tilesetData = race.tilesetData;
		this.xPosition = 0;
		this.yPosition = 0;
		this.intent = 'CHASE';
	}

	act () {
		switch (this.intent){
			case 'RANDOM':
				this.actRandom();
				break;
			case 'CHASE':
				this.actChase();
				break;
		}
	}

	actRandom () {
		var dx = Random.n(-1, 1);
		var dy = Random.n(-1, 1);
		if (!this.level.canWalkTo(this.x+dx,this.y+dy)){
			return;
		}
		this.moveTo(dx, dy);
	}

	actChase () {
		var nearestEnemy = this.getNearestEnemy();
		if (!nearestEnemy){
			return;
		}
		var dx = Math.sign(nearestEnemy.x - this.x);
		var dy = Math.sign(nearestEnemy.y - this.y);
		if (!this.level.canWalkTo(this.x+dx,this.y+dy)){
			return;
		}
		this.moveTo(dx, dy);
	}

	getNearestEnemy () {
		return this.game.player;
	}

	moveTo (dx: number, dy: number) {
		this.level.moveBeing(this, dx, dy)
		this.xPosition = this.x + dx;
		this.yPosition = this.y + dy;
	}

	setIntent (intent: string) {
		this.intent = intent;
	}
}