const Engineer = require('../lib/Engineer');

test('create engineer github', () => {
    const engineer = new Engineer('Bob', 34, 'bob@bob.com', 'bobsgithub');

    expect(engineer.github).toEqual(expect.any(String));
});

test('get engineer github', () => {
    const engineer = new Engineer('Bob', 34, 'bob@bob.com', 'bobsgithub');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get engineer role', () => {
    const engineer = new Engineer('Bob', 34, 'bob@bob.com', 'bobsgithub');

    expect(engineer.getRole()).toEqual('Engineer');
});