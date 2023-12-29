//function addingEventListener() {

//const sinon = require('sinon');

/*describe("index.js", () => {
    let input;
  
    beforeEach(function() {
      input = document.getElementById('input');
      sinon.spy(input, 'addEventListener');
    })
  
    it("binds an event listener in addingEventListener()", () => {
      addingEventListener();
      expect(input.addEventListener.called).to.be.true;
    })*/
function addingEventListener() {
    const input = document.querySelector('#input')
    function clickAlert(){
        return alert("Clicked");

    }


    
input.addEventListener('click', clickAlert)
}

