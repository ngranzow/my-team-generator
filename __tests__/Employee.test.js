const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('Bob', 34, 'bob@bob.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('get employee name', () => {
    const employee = new Employee('Bob', 34, 'bob@bob.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('get employee id', () => {
    const employee = new Employee('Bob', 34, 'bob@bob.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('get employee email', () => {
    const employee = new Employee('Bob', 34, 'bob@bob.com');

    expect(employee.getEmail()).toEqual(stringContaining(employee.email.toString()));
});

test('get employee role', () => {
    const employee = new Employee('Bob', 34, 'bob@bob.com');

    expect(employee.getRole()).toEqual('Employee');
});