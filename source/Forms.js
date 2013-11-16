enyo.kind({
	name: "bootstrap.Form",
	tag: "form",
	attributes: {
		role: "form",
	},
	published: {
		inline: false,
		horizontal: false,
	},
});

enyo.kind({
	name: "bootstrap.FormGroup",
	classes: "form-group",
})

enyo.kind({
	name: "bootstrap.FormControlLabel",
	tag: "label",
})

enyo.FormControl

enyo.kind({
	name: "bootstrap.FormControl",
	classes: "form-control",
	tag: 'input',
	attributes: {
		type: "text",
	},
	published: {
		type: "text",
	}
});

enyo.kind({
	name: "bootstrap.Textarea",
	tag: "input",
	classes: "form-control",
	attributes: {
		rows: "3",
	},
	published: {
		rows: "3",
	},
	create: function(){
		this.inherited(arguments);
		if (this.rows !== "3") {
			this.attributes.rows = this.rows;
		}
	}
})

enyo.kind({
	name: "bootstrap.Checkbox",
	classes: "checkbox",
	tag: "label",
	components: [
		{name: "checkbox", tag: "input", type: "checkbox"},
		{name: "label", tag: "span" }
	],
	create: function(){
		this.inherited(arguments);
	},
})