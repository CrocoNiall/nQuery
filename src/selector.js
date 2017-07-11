var N = N || function (selector = '') {
  this.init = () => {
    this.elements = Array.from(document.body.children);
    this.selectors = selector.match(/^[a-z]|#|\./gi) || [];
    this.selectorDesc = selector.split(/#|\./g).filter(Boolean);
    this.selectors.forEach(this.filterElements);
    return this.selectors.length ? this.elements : [];
  };

  this.filterElements = (selectorType, i) => {
    const htmlSelectors = { '.': 'className', '#': 'id' };
    this.currentSeclector = htmlSelectors[this.selectors[i]] || 'tagName';
    this.elements = this.elements.filter(function(element){
        const currentElementIdentifyer = element[currentSeclector].toLowerCase();
        return currentElementIdentifyer.indexOf(this.selectorDesc[i]) !== -1;
    });
  };
  return this.init();
};
