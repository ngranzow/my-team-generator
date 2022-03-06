const Manager = require('../lib/Manager');

test('create manager office number', () => {
    const manager = new Manager ('Bob', 34, 'bob@bob.com', 4);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get employee role', () => {
    const manager = new Manager ('Bob', 34, 'bob@bob.com', 4);

    expect(manager.getRole()).toEqual('Manager');
});