/* Bootstrap Dropdown Trigger Mixin
 * Makes an element emit dropdownToggle event.
 */
bootstrap.DropdownToggle = {
	name: "bootstrap.DropdownToggle",
	classes: "dropdown-toggle",
	attributes: {
		role: "button",
	},
	handlers: {
		ontap: "doDropdownToggle",
	},
	events: {
		onDropdownToggle: "",
	}
};

/* Bootstrap Dropdown mixin
 * Makes an element emit respond to dropdownToggle and closeDropdown events.
 */
bootstrap.Dropdown = {
	name: "bootstrap.Dropdown",
	classes: "dropdown",
	handlers: {
		onDropdownToggle: "toggleDropdown",
		onDropdownClose: "closeDropdown",
		onDropdownUp: "upDropdown",
		onDropdownDown: "downDropdown"
	},
	isOpen: false,
	toggleDropdown: function() {
		if (this.disabled) { return; }

		this.isOpen = this.hasClass('open');
		if (this.isOpen) {
			this.closeDropdown();
		} else {
			this.openDropdown();
		}

		return false;
	},
	openDropdown: function(){
		this.createComponent({ name: "backdrop", kind: "bootstrap.DropdownBackdrop" });
		this.$.backdrop.render();
		this.addClass('open');
		this.focus();
		this.isOpen = true;
	},
	closeDropdown: function(){
		this.removeClass('open');
		this.$.backdrop.destroy();
		this.isOpen = false;
	},
	upDropdown: function(){
		// debugger;
	},
	downDropdown: function(){
		// debugger;
	}
};

enyo.kind({
	name: "bootstrap.Carat",
	tag: 'span',
	classes: 'fa fa-caret-down'
});

enyo.kind({
	name: "bootstrap.DropdownBackdrop",
	classes: "dropdown-backdrop",
	handlers: {
		ontap: "doDropdownClose",
		onkeyup: "handleKeyUp",
	},
	components: [
		{kind: "enyo.Signals", onkeyup: "handleKeyUp"}
	],
	events: {
		onDropdownClose: "",
		onDropdownUp: "",
		onDropdownDown: ""
	},
	handleKeyUp: function(inSender, inEvent){
		if (inEvent.keyCode === 27) { // escape Key Code
			this.doDropdownClose();
		} else if (inEvent.keyCode === 38) {
			this.doDropdownUp();
		} else if (inEvent.keyCode === 40) {
			this.doDropdownDown();
		}
	},
});

enyo.kind({
	name: "bootstrap.DropdownMenu",
	classes: "dropdown-menu",
	attributes: {
		role: 'menu',
	},
	tag: 'ul',
	defaultKind: "bootstrap.DropdownMenuItem"
});

enyo.kind({
	name: "bootstrap.DropdownMenuItem",
	kind: "bootstrap.MenuItem",
	attributes: {
		role: 'presentation',
	},
	events: {
		onDropdownClose: ""
	},
	handlers: {
		ontap: "doDropdownClose"
	},
});

enyo.kind({
	name: "bootstrap.DropdownMenuHeader",
	attributes: {
		role: 'presentation',
	},
	tag: 'li',
	classes: "dropdown-header",
});

enyo.kind({
	name: "bootstrap.DropdownMenuDivider",
	attributes: {
		role: 'presentation',
	},
	tag: 'li',
	classes: "divider"
});
