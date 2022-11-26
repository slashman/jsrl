function PIXITextBox (PIXIText) {
	this.PIXIText = PIXIText;
	this.lastUpdateMillis = 0;
}

PIXITextBox.prototype.setText = function (str) {
	this.PIXIText.text = str;
};

PIXITextBox.prototype.addText = function (str) {
	var currentTime = new Date().getTime();
	if (currentTime - this.lastUpdateMillis > 200){
		this.PIXIText.text = '';
	}
	this.lastUpdateMillis = currentTime; 
	this.PIXIText.text += str;
}


module.exports = PIXITextBox;