enyo.kind({
	name: "bootstrap.Container",
	// ...........................
	// PUBLIC PROPERTIES
	tag: 'div',
	published: {
    fluid: false
  },
	create: function() {
		this.inherited(arguments);
    var classes = ["container"];
    if(this.fluid) {
      classes.push("fluid");
    }
    classes.length > 1 ? this.addClass(classes.join('-')) : this.addClass(classes);
	}
});

enyo.kind({
	name: "bootstrap.Row",
	// ...........................
	// PUBLIC PROPERTIES
	published: {
    fluid: false
  },
	tag: 'div',
	create: function() {
		this.inherited(arguments);
    var classes = ["row"];
    if(this.fluid) {
      classes.push("fluid");
    }
    classes.length > 1 ? this.addClass(classes.join('-')) : this.addClass(classes);
	}  
});

enyo.kind({
	name: "bootstrap.Col",
	// ...........................
	// PUBLIC PROPERTIES
	tag: 'div',
	published: {
		columns: [
			{
				screenSize: "md", // xs || sm || md || lg
				columns:  "12", //  default || lg || sm
				offset: false,
				push: false,
				pull: false,
			}
		]
	},
	// ...........................
	// PROTECTED METHODS
	create: function() {
		this.inherited(arguments);
		this.setupClasses();
	},
	setupClasses: function(){
		enyo.forEach(this.columns, this.addColumnClass, this);
	},
	addColumnClass: function(column){
		var columnClass = ["col", column.screenSize];
		if(this.push){
			columnClass.push("push");
		} else if (this.pull) {
			columnClass.push("pull");
		} else if (this.offset) {
			columnClass.push('offset')
		}
		this.addClass(columnClass.join('-'));
	}
});
