enyo.kind({
	name: "bootstrap.Alert",
	// ...........................
	// PUBLIC PROPERTIES
	classes: "alert",
	published: {
		type:  "info", // info || warning || danger || success
		dismissable: false
	},
	handlers: {
		onDismissAlert: "dismissAlert"
	},
	// ...........................
	// PROTECTED METHODS
	create: function() {
		this.inherited(arguments);
		this.setupClasses();
		if(this.dismissable){
			this.createComponent({kind:"bootstrap.AlertCloseIcon", addBefore: null});
		}
	},
	setupClasses: function(){
		var classes = [this.getAttribute('class')];
		classes.push("alert-" + this.type);
		if(this.dismissable){
			classes.push('alert-dismissable');
		}
		this.setAttribute('class', classes.join(' '));
	},
	dismissAlert: function(){
		this.destroy();
	}
});

enyo.kind({
	name: "bootstrap.AlertCloseIcon",
	kind: "bootstrap.CloseIcon",
	events: {
		onDismissAlert: "",
	},
	handlers: {
		ontap: "doDismissAlert",
	},
})

enyo.kind({
	name: "bootstrap.AlertLink",
	classes: "alert-link",
	tag: "a",
});
