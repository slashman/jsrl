/**
 * Represents a text box which can be updated to
 * show a new text along with the old one until
 * it is full, in which case it shows a [More]
 * prompt, waits for a player keypress, erases it
 * selfs and continues exhibiting the same behaviour.
 * 
 * @author Santiago Zapata
 * @author Eben Howard
 */
 
export default class TextBox {
	private display: any;
	private term: any;
	private curx: number;
	private cury: number;
	private height: number;
	private width: number;

	private lines: string[];
	private position: {x: number, y: number};
	private spaces: string;
	private lastUpdateMillis: number;

	constructor (term: any, height: number, width: number, position: {x: number, y: number}, display: any) {
		this.display = display;
		this.term = term;
		this.curx = 0;
		this.cury = 0;
		this.height = height;
		this.width = width;

		this.lines = new Array();
		this.position = position;
		for (var i = 0; i < height; i++){
			this.lines[i] = "";
		}
		this.spaces = "";
		for (var i = 0; i < width; i++){
			this.spaces += " ";
		}
		this.lastUpdateMillis = 0;
	}

	draw () {
		for (var i = 0; i < this.lines.length; i++) {
			this.term.putString(this.lines[i], this.position.x, this.position.y + i, 255, 255, 255);
		}
	}

	overgrown () {
		return this.lines.length > this.height;
	}

	checkFaint () {
		var currentTime = new Date().getTime();
		if (this.overgrown() && currentTime - this.lastUpdateMillis > 200){
			this.clear();
			this.display.refresh();
		}
	}

	addText (text: string) {
		var currentTime = new Date().getTime();
		if (this.cury >= this.height - 1 && currentTime - this.lastUpdateMillis > 200){
			this.clear();
			this.display.refresh();
		}
		this.lastUpdateMillis = currentTime; 

		var tokens = text.split(" ");
		for (var i = 0; i < tokens.length; i++) {
			var distance = this.width - this.curx;
			if (distance < tokens[i].length + 1) {
				this.curx = 0;
				this.cury++;
			}
			if (!this.lines[this.cury]){
				this.lines[this.cury] = "";
			}
			this.lines[this.cury] += tokens[i] + " ";
			this.curx += tokens[i].length + 1;
		}
	}

	setText (text: string) {
		this.clear();
		this.addText(text);
		this.draw();
		this.term.render();
	}

	clear () {
		for (var i = 0; i < this.lines.length; i++) {
			this.lines[i] = "";
			this.term.putString(this.spaces, this.position.x, this.position.y + i, 255, 255, 255);
		}
		this.lines.length = this.height;
		this.curx = 0;
		this.cury = 0;
	}
}