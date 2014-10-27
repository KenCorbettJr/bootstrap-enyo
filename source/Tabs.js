enyo.kind({
  name: "bootstrap.TabHolder",
  handlers: {
    onNavItemClicked: "showTabContent"
  },
  showTabContent: function(inSender, inEvent){
    this.waterfall("showTabContent", inEvent);
  }
});

enyo.kind({
  name: "bootstrap.TabContent",
  classes: "tab-content",
  published: {
    active: false
  },
  handlers: {
    showTabContent: "showTab"
  }, 
  showTab: function(inSender, inEvent){
    var tabPanes = this.children,
        id = inEvent.originator.getAttribute('href').slice(1);
    tabPanes.forEach(function(pane){
      if(pane.getAttribute('id') === id){
        pane.setActive(true);
      } else{
        pane.setActive(false);
      }
    });
  }
});

enyo.kind({
  name: "bootstrap.TabPane",
  classes: "tab-pane fade",
  attributes: {
    id: ''
  },
  published: {
    active: false
  },
  create: function(){
    this.inherited(arguments);
		this.activeChanged();
  },
	activeChanged: function(){
    var $this = this;
    if($this.active) {
		  $this.addRemoveClass('active', $this.active);
      setTimeout(function(){
        $this.addRemoveClass('in', $this.active);
      },150);
    } else {
		  $this.addRemoveClass('in', $this.active);
      $this.addRemoveClass('active', $this.active);
    }
	}
});


