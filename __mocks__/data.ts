import faker from 'faker';

export const settlements = Array.from({length: 1}, () => {
  return {
    __typename: 'Settlement',
    id: faker.datatype.uuid(),
    name: faker.lorem.word(),
  };
});

export const user = {
  uid: faker.datatype.uuid(),
};

export const settlement = {
  id: faker.datatype.uuid(),
};

export const showdown = {
  id: faker.datatype.uuid(),
};

export const player = {
  id: faker.datatype.uuid(),
};

export const showdowns = Array.from({length: 1}, () => {
  return {
    __typename: 'Showdown',
    id: faker.datatype.uuid(),
    year: 0,
    monsterLevel: {
      __typename: 'MonsterLevel',
      name: faker.lorem.word(),
      monster: {
        name: faker.lorem.word(),
      },
      movement: faker.datatype.number(10),
      toughness: faker.datatype.number(10),
      speedModifier: faker.datatype.number(10),
      damageModifier: faker.datatype.number(10),
    },
  };
});
