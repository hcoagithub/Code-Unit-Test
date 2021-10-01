const { sum } = require('./app.js');
const { fromEuroToDollar } = require('./app.js')
const { fromDollarToYen } = require('./app.js')
const { fromYenToPound } = require('./app.js')

test('adds 14 + 9 to equal 23', () => {

    let total = sum(14,9);

    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("One dollar should be 106.58 yens", function(){
    
    expect(fromDollarToYen(4)).toBe(426.33); 
})

test("One yen should be 0.006 pounds", function(){
  
    expect(fromYenToPound(6)).toBe(0.04);
})