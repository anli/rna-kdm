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
