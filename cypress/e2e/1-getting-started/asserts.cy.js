/// <reference types ="cypress" />

it('Equality', () => {
    const a = 1;
    
    expect(a).to.be.equal(1)
})

it('Truthy', () => {
    const a = true;

    expect(a).to.be.true;
})

it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj)
    expect(obj).to.be.deep.equal({ a: 1, b: 2})
    expect(obj).eql({ a: 1, b: 2})
    expect(obj).include({ c: 1})
    expect(obj).to.have.property('b')
})

it('Arrays', () => {
    const arr = [1, 2, 3]
    expect(arr).to.have.members([1,3])
    expect(arr).to.include.members([1,3])
    expect(arr).to.not.be.empty
    expect().to.not.empty
})

it('Types', () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('Object')
    expect([]).to.be.an('array')
})

it('String', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste')
})

it('numbers', () => {
    const number = 4
    const floatNumber = 5.2144

    expect(number).to.be.equal(4)
    e
})