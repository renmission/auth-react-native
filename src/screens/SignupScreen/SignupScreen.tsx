import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton';
import {useNavigation} from '@react-navigation/native';
import {INavigationProps} from '../../../types.d';

const Signup = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');

  const navigation = useNavigation<INavigationProps>();

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };

  const onTermsOfUserPressed = () => {
    console.log('onTermsOfUserPressed');
  };

  const onPrivacyPolicyPressed = () => {
    console.log('onPrivacyPolicyPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View>
          <Text style={styles.title}>Create an account</Text>
        </View>
        <CustomInput
          placeholder={'Username'}
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder={'Email'} value={email} setValue={setEmail} />
        <CustomInput
          placeholder={'Password'}
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder={'Repeat Password'}
          value={repeatPassword}
          setValue={setRepeatPassword}
          secureTextEntry
        />
        <CustomButton
          text={'Register'}
          onPress={onRegisterPressed}
          type={'PRIMARY'}
        />
        <View style={styles.text}>
          <Text>
            By registering you confirm that you accept out{' '}
            <Text style={styles.link} onPress={onTermsOfUserPressed}>
              Terms of Use
            </Text>{' '}
            and{' '}
            <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
              Privacy Policy
            </Text>
            .
          </Text>
        </View>

        <SocialSignInButton />

        <CustomButton
          text={'Have an account? Sign In.'}
          onPress={onSignInPressed}
          type={'TERTIARY'}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: 'darkblue',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
    fontWeight: 400,
  },
  link: {
    color: '#FDB075',
  },
});

export default Signup;
