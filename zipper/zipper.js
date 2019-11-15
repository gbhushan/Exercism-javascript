export const Zipper = {
  fromTree: function(tree) {
    // since I'm saving a reference to the tree, if I modify a node's value, I'll modify the original node as well. Therefore, I need to duplicate the incoming tree
    this.tree = JSON.parse(JSON.stringify(tree));
    this.focus = this.tree;
    this.trackParentList= [];
    return this;
  },
  toTree: function() {
    // console.log(this.tree);
    return this.tree;
  },
  left: function() {
    if (!this.focus.left) {
      return null;
    }
    this.trackParentList.push(this.focus);
    this.focus = this.focus.left;
    return this;
  },
  right: function() {
    if (!this.focus.right) {
      return null;
    }
    this.trackParentList.push(this.focus);
    this.focus = this.focus.right;
    return this;
  },
  up: function() {
    if (!this.trackParentList.length) { return null; }
    this.focus = this.trackParentList.pop();
    return this;
  },
  value: function() {
    return this.focus.value;
  },
  setValue: function(value) {
    this.focus.value = value;
    return this;
  },
  setLeft: function(node) {
    this.focus.left = node;
    return this;
  },
  setRight: function(node) {
    this.focus.right = node;
    return this;
  }
}