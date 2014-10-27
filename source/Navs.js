enyo.kind({
	name: "bootstrap.Nav",
	classes: "nav",
	tag: 'ul', 
	published: {
		type: 'tabs', // or pills
		justified: false,
		stacked: false
	},
  handlers: {
    onNavItemClicked: "changeActiveTab"
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
	},
  changeActiveTab: function(inSender, inEvent){
    this.waterfall("changeActiveTab", inEvent);
  }
});

enyo.kind({
	name: "bootstrap.MenuItem",
	tag: 'li',
  handlers: {
    changeActiveTab: "changeActiveTab"
  },
	published: {
		disabled: false,
		active: false,
		text: "",
		href: "javascript:;",
	},
	components: [
		{ kind: "bootstrap.MenuLink", name: 'link' },
	],  
	create: function() {
		this.inherited(arguments);
		this.setupLink();
		this.disabledChanged();
		this.activeChanged();
	},
	disabledChanged: function(){
		this.addRemoveClass('disabled', this.disabled);
	},
	activeChanged: function(){
		this.addRemoveClass('active', this.active);
	},
	setupLink: function(){
		this.$.link.setContent(this.text);
		this.$.link.setAttribute("href", this.href);
	},
  changeActiveTab: function(inSender, inEvent){
    if(this.href === inEvent.originator.getAttribute('href')){
      this.setActive(true);
    }else{
      this.setActive(false);
    }

  }
});

enyo.kind({
	name: "bootstrap.MenuLink",
	tag: 'a',
	attributes: {
		href: 'javascript:;',
	},
  handlers: {
    ontap: "navItemClicked"
  },
  events: {
    onNavItemClicked: ""
  },
  navItemClicked: function() {
    this.doNavItemClicked();
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
