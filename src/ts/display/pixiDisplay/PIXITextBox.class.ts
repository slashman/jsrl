/**
 * Wraps a text component with a function that adds texts smartly so that it can serve as a
 * rolling message log.
 *  
 * @param {PIXI.Text} PIXIText A Pixi.js Text game object
 */

import { Text } from "@pixi/text";

export default class PIXITextBox {
	private PIXIText: Text;
	private lastUpdateMillis: number;

	constructor (PIXIText: Text) {
		this.PIXIText = PIXIText;
		this.lastUpdateMillis = 0;
	}

	setText (str: string) {
		this.PIXIText.text = str;
	};
	addText (str: string) {
		var currentTime = new Date().getTime();
		if (currentTime - this.lastUpdateMillis > 200){
			this.PIXIText.text = '';
		}
		this.lastUpdateMillis = currentTime; 
		this.PIXIText.text += str;
	}
}