bootstrap.PopoverTrigger = enyo.mixin({
	published: {
		triggers: ["hover", "focus"], // hover, focus, click
		popoverTitle: "",
		popoverContent: "",
		popoverPlacement: "top",
		popoverDelay: 0
	},
	initializeTip: function(){
		if (!this.tip) {
			this.tip = this.createComponent({
				kind:"bootstrap.Popover",
				title: this.popoverTitle,
				content: this.popoverContent,
				delay: this.popoverDelay,
				placement: this.popoverPlacement
			});
			this.tip.render();
		}
	}
}, bootstrap.TipTrigger);

enyo.kind({
	name: "bootstrap.Popover",
	mixins: [ "bootstrap.TipPositioner" ],
	classes: "popover",
	published: {
		title: "",
		content: "",
		position: "right", // top, left, bottom, right
	},
	components: [
		{kind: "bootstrap.PopoverArrow"},
		{kind: "bootstrap.PopoverTitle"},
		{kind: "bootstrap.PopoverContent"}
	],
	applyContent: function(title, body){
		this.$.popoverTitle.setContent(this.title);
		this.$.popoverContent.$.text.setContent(this.content);
	},
});

enyo.kind({
	name: "bootstrap.PopoverTitle",
	classes: "popover-title",
	tag: "h3"
});

enyo.kind({
	name: "bootstrap.PopoverContent",
	classes: "popover-content",
	components: [
		{tag: "p", name: "text"}
	]
});

enyo.kind({
	name: "bootstrap.PopoverArrow",
	classes: "arrow",
});