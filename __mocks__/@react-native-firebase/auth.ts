import faker from 'faker';

export const mockedOnAuthStateChanged = jest.fn().mockImplementation(cb =>
  cb({
    displayName: '',
  }),
);

export const mockedSignInWithCredential = jest.fn();

export const mockedSignOut = jest.fn();

const module = Object.assign(
  jest.fn(() => ({
    onAuthStateChanged: mockedOnAuthStateChanged,
    signInWithCredential: mockedSignInWithCredential,
    signOut: mockedSignOut,
  })),
  {
    GoogleAuthProvider: {
      credential: jest.fn().mockReturnValue(faker.datatype.uuid()),
    },
  },
);

export default module;
