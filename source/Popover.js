// <div class="popover top">
//     <div class="arrow"></div>
//     <h3 class="popover-title">Popover top</h3>
//     <div class="popover-content">
//     	<p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
//     </div>
// </div>

enyo.kind({
	name: "bootstrap.Popover",
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
	create: function(){
		this.inherited(arguments);
		this.addClass(this.position);
		this.$.popoverTitle.setContent(this.title);
		this.$.popoverContent.$.text.setContent(this.content);
	}
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


