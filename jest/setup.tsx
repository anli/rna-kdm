import 'react-native-gesture-handler/jestSetup';

// Silence the warning: Animated: useNativeDriver is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// https://github.com/invertase/react-native-firebase/issues/4265#issuecomment-752718664
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.useFakeTimers();
