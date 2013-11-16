bootstrap.TooltipTrigger = {
	published: {
		triggers: {
			hover: true,
			focus: true,
			click: false
		},
		tooltipContent: "",
		tooltipPosition: "top",
		tooltipDelay: 0
	},
	handlers: {
		onenter:  "openTooltip",
		onleave: "closeTooltip",
		ontap:  "toggleTooltip",
		onfocus:  "openTooltip",
		onblur:  "closeTooltip"
	},
	tooltip: null,
	openTooltip: function(){
		if (!this.tooltip) {
			this.tooltip = this.createComponent({
				kind:"bootstrap.Tooltip",
				content: this.tooltipContent,
			}).this.render();
		}
		this.tooltip.show();
	},
	closeTooltip: function(){
		if(this.tooltip){
			this.tooltip.hide();
		}
	},
	toggleTooltip: function(){

	}
}

enyo.kind({
	name: "bootstrap.Tooltip",
	classes: "tooltip",
	published: {
		content: "Hello World",
		placement: "right", // top, top-left, top-right, right, left, bottom, bottom-left, bottom-left
		delay: 0,
		enabled: true,
	},
	components: [
		{kind: "bootstrap.TooltipInner"},
		{kind: "bootstrap.TooltipArrow"}
	],
	create: function(){
		this.inherited(arguments);
		this.addClass(this.position);
		this.$.tooltipInner.$.text.setContent(this.content);
	},
	isShown: false,
	show: function() {
		var bounds = this.getBounds();
	},
	hide: function() {

	},
	enable: function(){
		this.enabled = true;
	},
	disable: function(){
		this.enabled = false;
	},
	applyPlacement: function(offset, placement) {
		var replace;
		var width  = $tip[0].offsetWidth;
		var height = $tip[0].offsetHeight;

		// manually read margins because getBoundingClientRect includes difference
		var marginTop = parseInt($tip.css('margin-top'), 10);
		var marginLeft = parseInt($tip.css('margin-left'), 10);

		// we must check for NaN for ie 8/9
		if (isNaN(marginTop))  { marginTop  = 0; }
		if (isNaN(marginLeft)) { marginLeft = 0; }

		offset.top  = offset.top  + marginTop;
		offset.left = offset.left + marginLeft;

		this.offset(offset)
		this.addClass('in');

		// check to see if placing tip in new offset caused the tip to resize itself
		var actualWidth  = $tip[0].offsetWidth
		var actualHeight = $tip[0].offsetHeight

		if (placement == 'top' && actualHeight != height) {
		  replace = true
		  offset.top = offset.top + height - actualHeight
		}

		if (/bottom|top/.test(placement)) {
			var delta = 0

			if (offset.left < 0) {
			delta       = offset.left * -2
			offset.left = 0

			$tip.offset(offset)

			actualWidth  = $tip[0].offsetWidth
			actualHeight = $tip[0].offsetHeight
			}

			this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
		} else {
			this.replaceArrow(actualHeight - height, actualHeight, 'top')
		}

		if (replace) $tip.offset(offset)
	},
	getCalculatedOffset: function() {
		return placement == 'bottom' ? { top: pos.top + pos.height,                        left: pos.left + pos.width / 2 - actualWidth / 2  } :
               placement == 'top'    ? { top: pos.top - actualHeight,                      left: pos.left + pos.width / 2 - actualWidth / 2  } :
               placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
            /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   };
	}
});

enyo.kind({
	name: "bootstrap.TooltipInner",
	classes: "tooltip-inner"
});

enyo.kind({
	name: "bootstrap.TooltipArrow",
	classes: "tooltip-arrow"
});


