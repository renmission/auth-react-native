import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton';
import {useNavigation} from '@react-navigation/native';
import {INavigationProps} from '../../../types.d';
import {useForm} from 'react-hook-form';

const Signin = () => {
  const {height} = useWindowDimensions();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log(errors);

  const navigation = useNavigation<INavigationProps>();

  const onSignInPressed = (data: any) => {
    console.log(data);
    navigation.navigate('Home');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
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
          name="password"
          placeholder={'Password'}
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required *',
            minLength: {value: 3, message: 'Atleast 6 characters.'},
            pattern: {
              value: /^(?=.*[0-9]).+$/i,
              message: 'Must contain a number.',
            },
          }}
        />

        <CustomButton
          text={'Sign In'}
          onPress={handleSubmit(onSignInPressed)}
          type={'PRIMARY'}
        />
        <CustomButton
          text={'Forgot Password?'}
          onPress={onForgotPasswordPressed}
          type={'TERTIARY'}
        />
        <SocialSignInButton />

        <CustomButton
          text={'Dont have an account? Create here.'}
          onPress={onSignUpPressed}
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
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default Signin;
