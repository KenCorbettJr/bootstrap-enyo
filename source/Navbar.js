enyo.kind({
	name: "bootstrap.Navbar",
	classes: "navbar",
	tag: 'header',
	published: {
		inverse: false,
		fixed: false,
		position: "top",  // Or bottom, only applies when the navbar is fixed.
		brandText: "Brand",
		brandHref: "#",
	},
	handlers: {
		"onNavbarToggle": "toggleNavbar"
	},
	components: [
		{kind: "bootstrap.Container", components: [
			{kind: "bootstrap.NavbarHeader"},
			{kind: "bootstrap.NavbarCollapse"}
		]},
	],
	create: function() {
		this.inherited(arguments);
		this.setupClasses();
		this.$.navbarHeader.$.navbarBrand.setContent(this.brand);
		if (this.navbarComponents) {
			this.$.navbarCollapse.createComponents(this.navbarComponents);
		}
	},
	setupClasses: function(){
		if(this.inverse){
			this.addClass('navbar-inverse');
		} else {
			this.addClass('navbar-default');
		}

		if(this.fixed){
			this.addClass('navbar-fixed-' + this.position);
		} else {
			this.addClass('navbar-static-top');
		}
	},
	toggleNavbar: function(){
		// TODO: have this trigger the collapse section of the navbar
	}
});

enyo.kind({
	name: "bootstrap.NavbarHeader",
	classes: "navbar-header",
	components: [
		{ kind: "bootstrap.NavbarToggle" },
		{ kind: "bootstrap.NavbarBrand" },
	],
});

enyo.kind({
	name: "bootstrap.NavbarBrand",
	classes: "navbar-brand",
	tag: "a",
	href: "/",
});

enyo.kind({
	name: "bootstrap.NavbarText",
	classes: "navbar-text",
	tag: "span",
});

enyo.kind({
	name: "bootstrap.NavbarLink",
	tag: "a",
	href: "#",
});

enyo.kind({
	name: "bootstrap.NavbarToggle",
	classes: "navbar-toggle",
	tag: "button",
	attributes: {
		"type": "button",
	},
	events: {
		"onNavbarToggle": ""
	},
	handlers: {
		ontap: "doNavbarToggle",
	},
	components: [
		{tag: "span", classes: "sr-only", content: "Toggle Navigation"},
		{tag: "span", classes: "icon-bar"},
		{tag: "span", classes: "icon-bar"},
		{tag: "span", classes: "icon-bar"},
	],
	navbarToggleTap: function() {
		alert("Hello World!");
	}
});

enyo.kind({
	name: "bootstrap.NavbarNav",
	classes: "nav navbar-nav",
	published: {
		float: null, // Set to either right or left to float the nav in that direction.
	},
	create: function(){
		this.inherited(arguments);
		this.setupClasses();
	},
	setupClasses: function(){
		if(this.float){
			this.addClass('navbar-' + this.float);
		}
	}
});

enyo.kind({
	name: "bootstrap.NavbarForm",
	classes: "navbar-form",
	tag: "form",
	method: "GET",
});

enyo.kind({
	name: "bootstrap.NavbarCollapse",
	classes: "navbar-collapse in",
});