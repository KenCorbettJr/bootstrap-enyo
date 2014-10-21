enyo.kind({
  name: "bootstrap.ProgressBar",
	// ...........................
	// PUBLIC PROPERTIES
  classes: "progress",
  published: {
    percent: false,
    striped: false,
    text: false,
    type: "default", // progress-bar-default || progress-bar-primary || progress-bar-success || progress-bar-info || progress-bar-warning || progress-bar-danger    
  },
  components: [
    {tag: 'div', name: "progressBar", classes: "progress-bar", components: [
      {tag: 'span', name: "progressBarText", classes: "sr-only"}
    ]}
  ],
	// ...........................
	// PROTECTED METHODS
	create: function() {
		this.inherited(arguments);
		this.setupBar();
	},
	setupBar: function(){
		if(this.type && this.type != "default"){
		  this.$.progressBar.addClass("progress-bar-" + this.type);
		}
    if(this.striped){
		  this.$.progressBar.addClass("progress-bar-striped");
    }
		if(this.percent){
		  this.$.progressBar.applyStyle("width", this.percent + '%');
		}
    if(this.text){
      this.$.progressBarText.removeClass("sr-only");
      if(this.percent){
        this.$.progressBarText.setContent(this.text);        
      } else {
        this.$.progressBarText.setContent('0%');
      }
    }
	}
});
