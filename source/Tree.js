enyo.kind({
	name: "bootstrap.Tree",
  tag: "li",
  handlers: {
    ontap: "treeTap"
  },
  published: {
    label: ""
  },
  components: [
    {name: "label", tag: "label", classes: "tree-toggler nav-header"},
    {kind: "bootstrap.Nav", showing: false, type: "list", classes: "tree", defaultKind: "bootstrap.MenuItem"}
  ],
  initComponents: function(inSender, inEvent){
    this.inherited(arguments);
    if (this.label) {
      this.$.label.setContent(this.label);
    }
    if (this.treeComponents){
      this.$.nav.createComponents(this.treeComponents);
    }
  },
  treeTap: function(inSender, inEvent) {
    var $this = inEvent.originator;

    if($this.hasClass("tree-toggler")){
      if($this.parent.$.nav.showing){
        $this.parent.$.nav.hide();
      } else {
        $this.parent.$.nav.show();
      }
    }

    return true;
  }
});
