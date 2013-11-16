enyo.kind({
	name: "bootstrap.CloseIcon",
	kind: "Control",
	// ...........................
	// PUBLIC PROPERTIES
	tag: "button",
	classes: "close",
	attributes: {
		 "aria-hidden":"true"
	},
	events: {
		onTap: "emitCloseEvent"
	},
	content: '&times;',
	allowHtml: true,
	emitCloseEvent: function(){
		this.doClose();
	},

	// ...........................
	// PROTECTED METHODS
	create: function() {
        this.inherited(arguments);
    },
});