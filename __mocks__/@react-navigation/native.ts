export const mockedNavigate = jest.fn();
export const mockedReplace = jest.fn();

export * from '@react-navigation/native';

export const useNavigation = () => ({
  navigate: mockedNavigate,
  replace: mockedReplace,
});
