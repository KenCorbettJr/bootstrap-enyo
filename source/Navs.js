enyo.kind({
	name: "bootstrap.Nav",
	classes: "nav",
	tag: 'ul',
	published: {
		type: 'tabs', // or pills
		justified: false,
		stacked: false
	},
	create: function() {
		this.inherited(arguments);
		this.setupClasses();
	},
	setupClasses: function(){
		this.addClass('nav-' + this.type);
		if(this.justified){
			this.addClass('nav-justified');
		}
		if(this.stacked && this.type === 'pills'){
			this.addClass('nav-stacked');
		}
	}
});

enyo.kind({
	name: "bootstrap.MenuItem",
	tag: 'li',
	published: {
		disabled: false,
		active: false,
		text: "",
		href: "#",
	},
	components: [
		{ kind: "bootstrap.MenuLink", name: 'link' },
	],
	create: function() {
		this.inherited(arguments);
		this.setupClass();
		this.setupLink();
	},
	setupClass: function(){
		if(this.disabled){
			this.addClass('disabled');
		}
		if(this.active){
			this.addClass('active');
		}
	},
	setupLink: function(){
		this.$.link.setContent(this.text);
		this.$.link.setAttribute("href", this.href);
	}
});

enyo.kind({
	name: "bootstrap.MenuLink",
	tag: 'a',
	attributes: {
		href: '#',
	}
});

enyo.kind({
	name: "bootstrap.DropdownMenuToggleLink",
	kind: "bootstrap.MenuLink",
	mixins: [
		"bootstrap.DropdownToggle",
	],
	components: [
		{ tag: "span", name: "text" },
		{ kind: "bootstrap.Carat" },
	],
})

enyo.kind({
	name: "bootstrap.NavDropdown",
	kind: "bootstrap.MenuItem",
	mixins: [
		"bootstrap.Dropdown"
	],
	components: [
		{ kind: "bootstrap.DropdownMenuToggleLink", name: "link" },
	],
	setupLink: function(){
		this.$.link.$.text.content = this.text + " ";
	}
});

enyo.kind({
	name: "bootstrap.Badge",
	tag: 'span',
	classes: 'badge'
});
