enyo.kind({
	name: "bootstrap.Table",
	classes: "table",
	defaultKind: "bootstrap.TableRow",
	tag: "table",
	published: {
		bordered: false,
		condensed: false,
		hover: true,
		responsive: true,
		striped: true
	},
	create: function(){
		this.inherited(arguments);
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
	defaultKind: "bootstrap.TableHeaderRow",
});

enyo.kind({
	name: "bootstrap.TableBody",
	tag: "tbody",
	defaultKind: "bootstrap.TableRow",
});

enyo.kind({
	name: "bootstrap.TableFoot",
	tag: "tfoot",
	defaultKind: "bootstrap.TableRow",
});

enyo.kind({
	name: "bootstrap.TableRow",
	defaultKind: "bootstrap.TableCell",
	tag: "tr",
	published: {
		highlight: null,  // active, success, warning, danger
	},
	create: function(){
		this.inherited(arguments);
		this.setupClasses();
	},
	setupClasses: function(){
		if(this.highlight){
			this.addClass(this.highlight);
		}
	}
});

enyo.kind({
	name: "bootstrap.TableHeaderRow",
	kind: "bootstrap.TableRow",
	defaultKind: "bootstrap.TableHeaderCell"
})

enyo.kind({
	name: "bootstrap.TableCell",
	tag: "td",
	published: {
		highlight: null,  // active, success, warning, danger
	},
	create: function(){
		this.inherited(arguments);
		this.setupClasses();
	},
	setupClasses: function(){
		if(this.highlight){
			this.addClass(this.highlight);
		}
	}
});

enyo.kind({
	name: "bootstrap.TableHeaderCell",
	kind: "bootstrap.TableCell",
	tag: "th"
});