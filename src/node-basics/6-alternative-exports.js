// module export alternative for 3-modules.js

// instead of writing module.exports = { items }
const items = ['item1', 'item2'];
// it is possible to write just:
module.exports.items = ['item1','item2'];


const person = {
    name: 'bob',
}

module.exports.singlePerson = person;