'use strict';

const username = Symbol('username');
const password = Symbol('password');

const user = {
    age: 27,
    [username]: 'leandrososa',
    [password]: 'ciro123'
};

console.log(user.username);