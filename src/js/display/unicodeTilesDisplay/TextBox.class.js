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
 
function TextBox (term, height, width, position, display) {
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

TextBox.prototype.draw = function(){
	 for (var i = 0; i < this.lines.length; i++) {
		this.term.putString(this.lines[i], this.position.x, this.position.y + i, 255, 255, 255);
     }
};


TextBox.prototype.overgrown = function(){
	return this.lines.length > this.height;
}

TextBox.prototype.checkFaint = function(){
	var currentTime = new Date().getTime();
	if (this.overgrown() && currentTime - this.lastUpdateMillis > 200){
		this.clear();
		this.display.refresh();
	}
}

TextBox.prototype.addText = function(text){
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
			this.lines[this.cury] = [];
		}
        this.lines[this.cury] += tokens[i] + " ";
        this.curx += tokens[i].length + 1;
    }
};
    
TextBox.prototype.setText = function(text) {
	this.clear();
	this.addText(text);
	this.draw();
	this.term.render();
};

TextBox.prototype.clear = function() {
	for (var i = 0; i < this.lines.length; i++) {
		this.lines[i] = "";
		this.term.putString(this.spaces, this.position.x, this.position.y + i, 255, 255, 255);
	}
	this.lines.length = this.height;
	this.curx = 0;
	this.cury = 0;
};

module.exports = TextBox;