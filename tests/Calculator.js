describe('Demo Calculater test',function(){
it('check add', function(){

    browser.get('http://juliemr.github.io/protractor-demo/');
   
    element(by.model('first')).sendKeys('123');
    browser.sleep(2000);
    element(by.model('second')).sendKeys('123');
    browser.sleep(2000);
    element(by.css('[ng-click="doAddition()"]')).click();
    //element(by.cssContainingText('.ng-binding', '146'));
    
    browser.sleep(2000);
});

});