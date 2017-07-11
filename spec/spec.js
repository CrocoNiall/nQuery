(() => {
  mocha.setup('bdd')
  const expect = chai.expect;
  const should = chai.should();

  describe('init', function() {

    it('Should be defined',  () => {
      expect(N).to.be.a('function');
    });

    it('Should be called',  () => {
      var spy = chai.spy(N);
      spy('');
      expect(spy).to.be.called();
    });

  });

  describe('Selections return elements', () => {

    it('Should return an array', () => {
      let selection = N('');
      expect(selection).to.be.a('array')
    });

    it('Should return an empty array if no element found', () => {
      let selection = N('');
      expect(selection.length).to.equal(0);
    });

    it('Should return a populated array if element are found', () => {
      let selection = N('div');
      expect(selection.length).to.not.equal(0);
    });

    it('Should return DOM elements', () => {
      let instance = N('div')[0];
      expect(instance).to.be.an.instanceOf(Element);

    });

  });

  mocha.run();

})()
