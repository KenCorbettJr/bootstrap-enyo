enyo.kind({
	name: "bootstrap.Navbar",
	classes: "navbar",
	tag: 'header',
	published: {
		inverse: false,
		fixed: false,
    inContainer: false,
    sidebar: false,
		position: "top",  // Or bottom, only applies when the navbar is fixed.
		brand: "Brand",
		brandHref: "#",
	},
	handlers: {
		"onNavbarToggle": "toggleNavbar",
    "onSideNavbarToggle": "toggleSideNavbar"
	},
	components: [
    {name: "container", components: [
		  {kind: "bootstrap.NavbarHeader"},
		  {kind: "bootstrap.NavbarCollapse"}
    ]}
	],
	initComponents: function(){
		this.inherited(arguments);
		if (this.navbarComponents) {
			this.$.navbarCollapse.createComponents(this.navbarComponents);
		}
    if (this.inContainer) {
      this.$.container.addClass("container");
    } else {
      this.$.container.addClass("container-fluid");
    }
    if (this.sidebar) {
      this.$.navbarHeader.$.navbarToggle.handlers.ontap = "doSideNavbarToggle";
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
    if(this.$.navbarCollapse.opened) {
      this.$.navbarCollapse.opened = false;
    } else {
      this.$.navbarCollapse.opened = true;
    }

    this.$.navbarCollapse.addRemoveClass("in", this.$.navbarCollapse.opened);
	},
  toggleSideNavbar: function(){
    var offcanvasRow = document.querySelectorAll('.row-offcanvas')[0];
    
    if (offcanvasRow.classList) {
      offcanvasRow.classList.toggle("active");
    } else {
      var classes = offcanvasRow.className.split(' ');
      var existingIndex = classes.indexOf("active");

      if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
      else
        classes.push("active");

      offcanvasRow.className = classes.join(' ');
    }
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
  toggleSidbar: false,
	tag: "button",  
	attributes: {
		"type": "button",
	},
	events: {
		"onNavbarToggle": "",
    "onSideNavbarToggle": ""
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
	create: function(){
		this.inherited(arguments);
		this.setupToggle();
	},
	setupToggle: function(){
		if(this.toggleSidebar){
			this.setAttribute('data-toggle', "offcanvas");
		}
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
  opened: false,
	classes: "navbar-collapse collapse",
});
