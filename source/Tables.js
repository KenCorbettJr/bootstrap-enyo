enyo.kind({
	name: "bootstrap.Table",
	classes: "table",
	tag: "table",
	published: {
		bordered: false,
		condensed: false,
		hover: true,
		responsive: true,
		striped: true
	},
	create: function(){
		this.inheritied(arguments);
		this.setupClasses();
	},
	setupClasses: function(){
		if (this.striped) {
			this.addClass("table-striped");
		}
		if (this.bordered) {
			this.addClass("table-bordered");
		}
		if (this.condensed) {
			this.addClass("table-condensed");
		}
		if (this.hover) {
			this.addClass("table-hover");
		}
		if (this.responsive) {
			this.addClass("table-responsive");
		}
	}
});

enyo.kind({
	name: "bootstrap.TableHead",
	tag: "thead",
});

enyo.kind({
	name: "bootstrap.TableBody",
	tag: "thead",
});

enyo.kind({
	name: "bootstrap.TableFoot",
	tag: "tfoot",
});

enyo.kind({
	name: "bootstrap.TableRow",
	tag: "tr",
	published: {
		highlight: null,  // active, success, warning, danger
	},
	create: function(){
		this.inheritied(arguments);
		this.createClasses();
	},
	setupClasses: function(){
		if(this.highlight){
			this.addClass("highlight");
		}
	}
});

enyo.kind({
	name: "bootstrap.TableHeaderCell",
	tag: "th",
	published: {
		highlight: null,  // active, success, warning, danger
	},
	create: function(){
		this.inheritied(arguments);
		this.createClasses();
	},
	setupClasses: function(){
		if(this.highlight){
			this.addClass("highlight");
		}
	}
});

enyo.kind({
	name: "bootstrap.TableCell",
	tag: "td",
	published: {
		highlight: null,  // active, success, warning, danger
	},
	create: function(){
		this.inheritied(arguments);
		this.createClasses();
	},
	setupClasses: function(){
		if(this.highlight){
			this.addClass("highlight");
		}
	}
});