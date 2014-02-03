enyo.arrayContains = function(inElement, inArray){
	return enyo.indexOf(inElement, inArray) !== -1;
};

var  bootstrap = bootstrap || {};

bootstrap.TipTrigger = {
	handlers: {
		onenter: "enter",
		onleave: "leave",
		ontap: "tap",
		onfocus: "focus",
		onblur: "blur"
	},
	tip: null,
	timeout: null,
	hoverState: null,
	enter: function(){
		if (enyo.arrayContains("hover", this.triggers)) {
			clearTimeout(this.timeout);

			this.hoverState = "in";

			this.initializeTip();

			if(this.tip.delay.show) {
				this.timeout = setTimeout(this.bindSafely(this.enterDelayCallback), this.tip.delay.show);
			} else {
				this.openTip();
			}
		}
	},
	enterDelayCallback: function(){
		if (this.hoverState === "in") {
			this.openTip();
		}
	},
	leave: function(){
		if (enyo.arrayContains("hover", this.triggers)) {
			clearTimeout(this.timeout);

			this.hoverState = "out";

			if(this.tip.delay.hide) {
				this.timeout = setTimeout(this.bindSafely(this.leaveDelayCallback), this.tip.delay.hide);
			} else {
				this.closeTip();
			}
		}
	},
	leaveDelayCallback: function(){
		if (this.hoverState === "out") {
			this.closeTip();
		}
	},
	tap: function(){
		if (enyo.arrayContains("click", this.triggers)) {
			this.toggleTip();
		}
	},
	hover: function(){
		if (enyo.arrayContains("focus", this.triggers)) {
			this.openTip();
		}
	},
	blur: function(){
		if (enyo.arrayContains("focus", this.triggers)) {
			this.closeTip();
		}
	},
	openTip: function(){
		this.initializeTip()
		this.tip.show();
	},
	closeTip: function(){
		if(this.tip){
			this.tip.hide();
		}
	},
	toggleTip: function(){
		if(this.tip && this.tip.isShown) {
			this.closeTip();
		} else {
			this.openTip();
		}
	}
};

bootstrap.TipPositioner = {
	published: {
		content: "",
		placement: "top", // top, top-left, top-right, right, left, bottom, bottom-left, bottom-left
		delay: 0,
		enabled: true,
		animate: true
	},
	handlers: {
		ontransitionend: "transitionComplete",
	},
	constructor: enyo.inherit(function(sup){
		return function(){
			sup.apply(this, arguments);

			if(typeof this.delay === "number") {
				this.delay = {
					show: this.delay,
					hide: this.delay
				};
			}
		}
	}),
	create: enyo.inherit(function(sup){
		return function(){
			sup.apply(this, arguments);

			if(this.animate) {
				this.addClass('fade');
			}

			this.applyContent();

			// Cache the current parent as the target for the tooltip
			this.target = this.parent;

			// set this tooltip to live on the floating layer so it can be accurately
			// positioned anywhere on the whole window.
			this.setParent(enyo.floatingLayer);
		}
	}),
	isShown: false,
	show: function() {
		if (this.content && this.enabled) {
			this.applyStyle("display","block");
			this.addClass(this.placement);
			var elementBounds = this.getAbsoluteBounds();
			var targetBounds = this.target.getAbsoluteBounds();

			// Adjust tooltip position based on whether or not the tooltip will be visible.
			var originalPlacement = this.placement;
			var containerWidth = enyo.dom.getWindowWidth();
			var containerHeight = enyo.dom.getWindowHeight();
			this.placement = this.placement == 'bottom' && targetBounds.top   + targetBounds.height + elementBounds.height > containerHeight  ? 'top'    :
							 this.placement == 'top'    && targetBounds.top   - elementBounds.height < 0                                      ? 'bottom' :
							 this.placement == 'right'  && targetBounds.right + elementBounds.width > containerWidth                          ? 'left'   :
							 this.placement == 'left'   && targetBounds.left  - elementBounds.width < 0                                       ? 'right'  :
							 this.placement;
			if(this.placement !== originalPlacement){
			    this.removeClass(originalPlacement);
				this.addClass(this.placement);
			}

			var newBounds = this.getCalculatedBounds(targetBounds, elementBounds);

			this.applyPlacement(newBounds);
		}
	},
	applyPlacement: function(newBounds){
		this.setBounds(newBounds);
		this.addClass(this.placement);
		this.addClass('in');
		this.isShown = true;
	},
	getCalculatedBounds: function(targetBounds, elementBounds){
		// Calculate the new bounds
		return this.placement == 'bottom' ? { top: targetBounds.top + targetBounds.height,                                left: targetBounds.left + targetBounds.width / 2 - elementBounds.width / 2 } :
			   this.placement == 'top'    ? { top: targetBounds.top - elementBounds.height,                               left: targetBounds.left + targetBounds.width / 2 - elementBounds.width / 2 } :
			   this.placement == 'left'   ? { top: targetBounds.top + targetBounds.height / 2 - elementBounds.height / 2, left: targetBounds.left - targetBounds.width } :
			/* this.placement == 'right' */ { top: targetBounds.top + targetBounds.height / 2 - elementBounds.height / 2, left: targetBounds.left + targetBounds.width };
	},
	hide: function() {
		if (this.isShown) {
			this.removeClass('in');
			this.isShown = false;
			this.hiding = true;
		}
	},
	hideComplete: function(){
		this.hiding = false;
		this.applyStyle("display", "none");
	},
	transitionComplete: function(inSender, inEvent){
		if (inEvent.originator === this && this.hiding) {
			this.hideComplete();
		}
	},
	enable: function(){
		this.enabled = true;
	},
	disable: function(){
		this.enabled = false;
	}
};