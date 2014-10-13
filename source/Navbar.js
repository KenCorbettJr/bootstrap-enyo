enyo.kind({
	name: "bootstrap.Navbar",
	classes: "navbar",
	tag: 'header',
	published: {
		inverse: false,
		fixed: false,
		position: "top",  // Or bottom, only applies when the navbar is fixed.
		brand: "Brand",
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
	initComponents: function(){
		this.inherited(arguments);
		if (this.navbarComponents) {
			this.$.navbarCollapse.createComponents(this.navbarComponents);
		}
	},
	create: function(){
		this.inherited(arguments);
		this.brandChanged();
		this.inverseChanged();
		this.fixedChanged();
		this.positionChanged();
	},
	brandChanged: function(){
		if(this.$.navbarHeader && this.$.navbarHeader.$.navbarBrand) {
			this.$.navbarHeader.$.navbarBrand.setContent(this.brand);
		}
	},
	inverseChanged: function(){
		if (this.inverse) {
			this.removeClass('navbar-default');
			this.addClass('navbar-inverse');
		} else {
			this.removeClass('navbar-inverse');
			this.addClass('navbar-default');
		}
	},
	fixedChanged: function(){
		if (this.fixed) {
			this.removeClass('navbar-static-top');
			this.addClass('navbar-fixed-' + this.position);
		} else if (this.default) {
			this.removeClass('navbar-static-top');
    }
    else {
			this.addClass('navbar-static-top');
			this.removeClass('navbar-fixed-' + this.position);
		}
	},
	positionChanged: function(oldPosition){
		if(this.fixed){
			this.removeClass('navbar-fixed-' + oldPosition);
			this.addClass('navbar-fixed-' + this.position);
		}
	},
	toggleNavbar: function(){
		// TODO: have the colapse expand the drawer.
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
