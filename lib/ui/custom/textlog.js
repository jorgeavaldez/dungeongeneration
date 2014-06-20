/**
 * UI Element TextLog constructor
 *
 * @class Roguelike.UI.Element.TextLog
 * @classdesc An object that is able to render messages from the textlog
 * Inherits from Roguelike.UI.Element
 *
 * @param {Roguelike.Vector2} position - The position of this element
 * @param {Roguelike.Game} game - Reference to the currently running game
 */
Roguelike.UI.Element.TextLog = function(position, game) {

	/**
	 * Inherit the constructor from the Element class
	 */
	Roguelike.UI.Element.call(this, position);

	/**
	 * @property {Roguelike.Game} game - Reference to the current game object
	 */
	this.game = game;

	/**
	 * @property {Number} fontSize - The size of the text
	 */
	this.color = "rgba(255, 255, 255, 1)";

	/**
	 * @property {Number} fontSize - The size of the text
	 */
	this.fontSize = 12;

	/**
	 * @property {String} font - The font that the text is being rendered in
	 */
	this.font = "Courier New";

	/**
	 * @property {Number} maxMessages - The max amount of messages displayed in the text log
	 */
	this.maxMessages = 5;

};

Roguelike.UI.Element.TextLog.prototype = Object.create(Roguelike.UI.Element.prototype, {

	render: {

		/**
		 * Calls the render function of each of the containers children
		 * @protected
		 *
		 * @param {Object} context - Reference to the current canvas context
		 * @param {Roguelike.Vector2} parentPosition - The position of the previous container that called this render function
		 */
		value: function(context, parentPosition) {

			//Check if the container and it's children even need to be rendered
			if(!this.visible){

				return;

			}

			//Create a new starting position using the provided position and the position of this container
			var newPosition = parentPosition.combine(this.position);

			//Grab all messages from the text log
			var messages = this.game.textLog.getMessages();

			//Determine what the lineHeight is
			var lineHeight = this.fontSize + 5;

			//Loop through each element in this container
			for(var i = 0; i < this.maxMessages; i++) {

				if(!messages[messages.length - 1 - i]){
					break;
				}

				//Define the visual style of the text, font, color, etc
				context.font = this.fontSize + "px " + this.font;
				context.fillStyle = this.color;

				//Draw the text on screen
				context.fillText(
					messages[messages.length - 1 - i],
					newPosition.x,
					newPosition.y + lineHeight + (lineHeight * i)
				);

			}

		}

	}

});