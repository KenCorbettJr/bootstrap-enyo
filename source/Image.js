enyo.kind({
	name: "bootstrap.Image",
	// ...........................
	// PUBLIC PROPERTIES
	tag: 'img',
	published: {
		type: "rounded", // rounded || circle || thumbnail
		src:  "", //  default || lg || sm
	},

	// ...........................
	// PROTECTED METHODS
	create: function() {
        this.inherited(arguments);
        this.setupClasses();
    },
    setupClasses: function(){
    	var classes = [this.getClassAttribute()];
    	classes.push('img-' + this.type);
    	this.setClassAttribute(classes.join(' '));
    }
});