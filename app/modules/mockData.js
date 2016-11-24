import Chance from 'chance';

var chance = new Chance();

chance.mixin({
  person: function () {
    return {
      id: chance.natural(),
      phonebookId: chance.hash(),
      avatar: chance.avatar({protocol: 'https'}),
      name: chance.name(),
      frequency: chance.integer({min: 1, max: 30}),
      missed: chance.integer({min: 1, max: 3})
    };
  }
});

export let people = chance.unique(chance.person, 100);
