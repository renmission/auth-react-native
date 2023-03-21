import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {INavigationProps} from '../../../types.d';
import {useForm} from 'react-hook-form';

const ForgotPasswordScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log(errors);

  const navigation = useNavigation<INavigationProps>();

  const onSendPressed = () => {
    navigation.navigate('NewPassword');
  };
  const onSigninPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View>
          <Text style={styles.title}>Reset your password</Text>
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
        <CustomButton
          text={'Send'}
          onPress={handleSubmit(onSendPressed)}
          type={'PRIMARY'}
        />

        <CustomButton
          text={'Back to Sign In'}
          onPress={onSigninPressed}
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

export default ForgotPasswordScreen;
