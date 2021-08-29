import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useCallback, useEffect, useState} from 'react';

export const useAuthentication = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  const onAuthStateChanged = useCallback(
    (firebaseUser: FirebaseAuthTypes.User | null) => {
      setUser(firebaseUser);
      if (initializing) {
        setInitializing(false);
      }
    },
    [initializing],
  );

  useEffect(() => {
    return auth().onAuthStateChanged(onAuthStateChanged);
  }, [onAuthStateChanged]);

  const login = async () => {
    try {
      const isSignIn = await GoogleSignin.isSignedIn();
      isSignIn && (await GoogleSignin.signOut());

      const {idToken} = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return await auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        return;
      }

      throw error;
    }
  };

  const logout = () => {
    auth().signOut();
  };

  return {login, logout, user, initializing};
};
