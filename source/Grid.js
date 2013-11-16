enyo.kind({
	name: "bootstrap.Container",
	// ...........................
	// PUBLIC PROPERTIES
	classes: "container",
	tag: 'div',
});

enyo.kind({
	name: "bootstrap.Row",
	// ...........................
	// PUBLIC PROPERTIES
	classes: "row",
	tag: 'div',
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