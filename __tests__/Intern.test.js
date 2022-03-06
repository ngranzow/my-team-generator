const Intern = require('../lib/Intern');

test('create intern school', () => {
    const intern = new Intern('Bob', 34, 'bob@bob.com', 'UCLA');

    expect(intern.school).toEqual(expect.any(String));
});

test('get intern school', () => {
    const intern = new Intern('Bob', 34, 'bob@bob.com', 'UCLA');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get engineer role', () => {
    const intern = new Intern('Bob', 34, 'bob@bob.com', 'UCLA');

    expect(intern.getRole()).toEqual('Intern');
});