/**
 * Wraps a text component with a function that adds texts smartly so that it can serve as a
 * rolling message log.
 *  
 * @param {PIXI.Text} PIXIText A Pixi.js Text game object
 */
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