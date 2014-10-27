enyo.kind({
	name: "bootstrap.Well",
	// ...........................
	// PUBLIC PROPERTIES
	classes: "well",
	published: {
		size:  "", //  default || lg || sm
	},

	// ...........................
	// PROTECTED METHODS
	create: function() {
		this.inherited(arguments);
		this.setupClasses();
	},
	setupClasses: function(){
		var classes = ["well"];
		if(this.size){
			classes.push("well-" + this.size);
		}
		this.setAttribute('class', classes.join(' '));
	}
});
