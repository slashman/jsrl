/**
 * Draws a black box in the terminal
 * 
 * @param {D} term 
 * @param {*} height 
 * @param {*} width 
 * @param {*} position 
 */
export default class Box {
	private term: any;
	private height: number;
	private position: {x: number, y: number};
	private spaces: string;

	constructor (term: any, height: number, width: number, position: {x: number, y: number}) {
		this.term = term;
		this.height = height;
		this.position = position;
		this.spaces = "";
		for (var i = 0; i < width; i++){
			this.spaces += " ";
		}
	}

	draw() {
		for (var i = 0; i < this.height; i++) {
			this.term.putString(this.spaces, this.position.x, this.position.y + i, 255, 255, 255);
		}
	}
}