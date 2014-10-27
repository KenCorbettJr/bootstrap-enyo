enyo.kind({
	name: "bootstrap.Button",
	kind: "Control",
	// ...........................
	// PUBLIC PROPERTIES
	classes: "btn",
	tag: "button",
	published: {
		type: "default", // btn-default || btn-primary || btn-success || btn-info || btn-warning || btn-danger || btn-link
		size:  "", //  nothing || lg || sm || xs
		block: false, // true adds a btn-block class
		disabled: false, // true adds a btn-disabled class
	},
	// ...........................
	// PROTECTED METHODS
	create: function() {
		this.inherited(arguments);
		this.setupClasses();
	},
	setupClasses: function(){
		if(this.type){
		   this.addClass("btn-" + this.type);
		}
		if(this.size){
			this.addClass("btn-" + this.size);
		}
		if(this.block){
			this.addClass('btn-block');
		}
		if(this.disabled){
			this.addClass("disabled");
		}
	}
});

enyo.kind({
	name: "bootstrap.LoadingButton",
	kind: "bootstrap.Button",
	published: {
		loadingText: "Loading..."
	},
	activeText: null,
	events: {
		onStartLoading: ""
	},
	handlers: {
		onDoneLoading: "stopLoading",
		ontap: "startLoading"
	},
	startLoading: function(){
		this.addClass("disabled");
		this.activeText = this.getContent();
		this.setContent(this.loadingText);
		this.doStartLoading();
	},
	stopLoading: function(){
		this.setContent(this.activeText);
		this.removeClass("disabled");
	}
})

enyo.kind({
	name: "bootstrap.ToggleButton",
	kind: "bootstrap.Button",
	events: {
		onToggle: ""
	},
	handlers: {
		ontap: "toggle"
	},
	toggle: function(){
		if(this.hasClass("active")){
			this.removeClass("active");
		} else {
			this.addClass("active");
		}
		this.doToggle();
	},
})

enyo.kind({
	name: "bootstrap.ButtonGroup",
	// ...........................
	// PUBLIC PROPERTIES
	classes: "btn-group",
	defaultKind: "bootstrap.Button",
	tag: 'div',
	published: {
		vertical: false
	},
	create: function() {
		this.inherited(arguments);
		if(this.vertical){
			this.addClass("vertical");
		}
	}
});

enyo.kind({
	name: "bootstrap.DropdownToggleButton",
	kind: "bootstrap.Button",
	mixins: [
		"bootstrap.DropdownToggle"
	],
	tag: "a",
	components: [
		{ tag: "span", name: "text" },
		{ kind: "bootstrap.Carat" },
	],
});

enyo.kind({
	name: "bootstrap.DropdownButton",
	kind: "bootstrap.ButtonGroup",
	mixins: [
		"bootstrap.Dropdown"
	],
	published: {
		btnAttributes: {}
	},
	components: [
		{ kind: "bootstrap.DropdownToggleButton", name: "button" },
	],
	classes: "dropdown",
	create: function(){
		this.inherited(arguments);
		this.$.button.$.text.content = this.text + " ";

		enyo.mixin(this.$.button, this.btnAttributes)
		this.$.button.setupClasses();
	},
});
enyo.kind({
	name: "bootstrap.SplitDropdownButton",
	kind: "bootstrap.ButtonGroup",
	mixins: [
		"bootstrap.Dropdown"
	],
	published: {
		btnAttributes: {}
	},
	components: [
		{ kind: "bootstrap.Button", name: "button" },
		{ kind: "bootstrap.DropdownToggleButton", name: "dropdown" },
	],
	classes: "dropdown",
	create: function(){
		this.inherited(arguments);
		this.$.button.setContent(this.text);

		enyo.mixin(this.$.button, this.btnAttributes)
		this.$.button.setupClasses();
		enyo.mixin(this.$.dropdown, this.btnAttributes)
		this.$.dropdown.setupClasses();
	},
});
