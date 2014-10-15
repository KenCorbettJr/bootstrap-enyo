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
	initComponents: function() {
		this.inherited(arguments);
		if (this.inline) {
			this.addClass("form-inline");
		} else if (this.horizontal) {
			this.addClass("form-horizontal")
		}
	}
});

enyo.kind({
	name: "bootstrap.FormGroup",
	classes: "form-group",
})

enyo.kind({
	name: "bootstrap.FormControlLabel",
	tag: "label",
	published: {
		screenReaderOnly: false,
	},
	initComponents: function() {
		this.inherited(arguments);
		if (this.screenReaderOnly) {
			this.addClass("sr-only");
		}
	}
})

enyo.kind({
	name: "bootstrap.FormControl",
	classes: "form-control",
	tag: 'input',
	attributes: {
		type: "text",
    placeholder: "",
	},
	published: {
		type: "text",
	},
  create: function() {
		this.inherited(arguments);
		if (this.placeholder) {
      this.attributes.placeholder = this.placeholder;
		}
  }
});

enyo.kind({
	name: "bootstrap.TextArea",
	tag: "textarea",
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
