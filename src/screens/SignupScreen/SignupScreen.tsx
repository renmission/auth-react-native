import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton';
import {useNavigation} from '@react-navigation/native';
import {INavigationProps} from '../../../types.d';
import {useForm} from 'react-hook-form';

const Signup = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const pwd = watch('password');

  console.log(errors);

  const navigation = useNavigation<INavigationProps>();

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  const onRegisterPressed = (data: any) => {
    console.log(data);

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
          name="username"
          placeholder={'Username'}
          control={control}
          rules={{
            required: 'Username is required *',
            minLength: {value: 3, message: 'Atleast 3 characters long'},
          }}
        />
        <CustomInput
          name="email"
          placeholder={'Email'}
          control={control}
          rules={{
            required: 'Email is required *',
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Invalid email address',
            },
          }}
        />
        <CustomInput
          name="password"
          placeholder={'Password'}
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required *',
            minLength: {value: 6, message: 'Atleast 6 characters.'},
          }}
        />
        <CustomInput
          name="password-repeat"
          placeholder={'Cofirm Password'}
          control={control}
          secureTextEntry
          rules={{
            required: 'Confirm Password is required *',
            minLength: {value: 6, message: 'Atleast 6 characters.'},
            validate: (value: string) =>
              value === pwd || 'Password do not match',
          }}
        />
        <CustomButton
          text={'Register'}
          onPress={handleSubmit(onRegisterPressed)}
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
