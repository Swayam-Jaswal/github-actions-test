const add = require('./math');

test("add numbers",()=>{
    expect(add(2,3)).tobe(5);
});

test("subtract numbers",()=>{
    expect(sub(3,2)).tobe(1);
})

test("multiply numbers",()=>{
    expect(mul(2,2)).tobe(4);
})