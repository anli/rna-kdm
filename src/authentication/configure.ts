import {AUTHENTICATION_WEB_CLIENT_ID} from '@env';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const configure = () => {
  GoogleSignin.configure({
    webClientId: AUTHENTICATION_WEB_CLIENT_ID,
  });
};
