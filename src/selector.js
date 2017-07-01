var N = N || function (selector = '') {
  this.init = function() {
    this.elements = Array.from(document.body.children);
    this.selectors = selector.match(/^[a-z]|#|\./gi) || [];
    this.selectorDesc = selector.split(/#|\./g).filter(Boolean);
    this.selectors.forEach(this.filterElements);
    return this.selectors.length ? this.elements : [];
  };

  this.filterElements = function(selectorType, i){
    var htmlSelectors = { '.': 'className', '#': 'id' };
    this.currentSeclector = htmlSelectors[this.selectors[i]] || 'tagName';
    this.elements = this.elements.filter(function(element){
        var currentElementIdentifyer = element[currentSeclector].toLowerCase();
        return currentElementIdentifyer.indexOf(this.selectorDesc[i]) !== -1;
    });
  };
  return this.init();
};
