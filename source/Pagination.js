enyo.kind({
	name: "bootstrap.Pagination",
	tag: "ul",
	classes: "pagination",
	defaultKind: "bootstrap.MenuItem",
	published: {
		size: "normal" // small, normal, large
	},
	create: function(){
		this.inherited(arguments);

		if(this.size !== "normal"){
			if(this.size === "large"){
				this.addClass("pagination-lg");
			}
			if(this.size === "small"){
				this.addClass("pagination-sm");
			}
		}
	}
});
