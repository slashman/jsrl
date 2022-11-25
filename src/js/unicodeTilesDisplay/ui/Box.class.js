function Box (term, height, width, position) {
	this.term = term;
	this.height = height;
	this.width = width;
	this.position = position;
	this.spaces = "";
	for (var i = 0; i < width; i++){
		this.spaces += " ";
	}
}

Box.prototype.draw = function(){
	for (var i = 0; i < this.height; i++) {
		this.term.putString(this.spaces, this.position.x, this.position.y + i, 255, 255, 255);
    }
};

module.exports = Box;