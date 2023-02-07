import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
};

export const addUser = (req, res) => {
    const user = req.body;
    const userWithId = { id: uuid(), ...user };
    users.push(userWithId);
    console.log(users);
    res.send(`Added user ${user.firstName}`);
};

//  /users/2 => req.params {id : 2}
export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};
// update
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;
    res.send(id);
};
export const deleteUser = (req, res) => {
    const { id } = req.params;
    console.log(`params = ${id}`);
    users = users.filter((user) => user.id !== id);
    res.send(`user with id ${id} deleted`);
};
export default users;
