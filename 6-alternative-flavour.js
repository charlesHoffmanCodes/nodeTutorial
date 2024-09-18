//BIG IDEA - other ways / examples of setting a module's export property 

module.exports.items = ['item1', 'item2'];    //export object now has property items with value ['item1', 'item2]
const person = {
    name: 'bob',
}

module.exports.singlePerson = person;