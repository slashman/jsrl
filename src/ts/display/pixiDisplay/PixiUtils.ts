import { Text } from 'pixi.js';

export default {
	createTextBox(x, y, fontSize, initialText, wordWrapWidth?) {
		const textBox = new Text(initialText, {
			fontFamily: 'Kenney Pixel',
			fontSize: fontSize,
			fill: 0xdddddd,
			align: 'left',
			wordWrap: !!wordWrapWidth,
			wordWrapWidth: wordWrapWidth
		});
		textBox.scale.x = 0.25;
		textBox.scale.y = 0.25;
		textBox.position.x = x;
		textBox.position.y = y;
		textBox.text = initialText;
		return textBox;
	}
}