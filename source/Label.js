enyo.kind({
  name: "bootstrap.Label",
  kind: "Control",
	// ...........................
	// PUBLIC PROPERTIES
  classes: "label",
  tag: "span",
  published: {
    type: "default", // label-default || label-primary || label-success || label-info || label-warning || label-danger
  },
	// ...........................
	// PROTECTED METHODS
	create: function() {
		this.inherited(arguments);
		this.setupClasses();
	},
	setupClasses: function(){
		if(this.type){
		   this.addClass("label-" + this.type);
		}
	}  
});
