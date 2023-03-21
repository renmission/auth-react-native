import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {INavigationProps} from '../../../types.d';
import {useForm} from 'react-hook-form';

const ConfirmEmailScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log(errors);
  const navigation = useNavigation<INavigationProps>();

  const onConfirmPressed = (data: any) => {
    console.log(data);
    navigation.navigate('Home');
  };
  const onSigninPressed = () => {
    navigation.navigate('SignIn');
  };
  const onResendPressed = () => {
    console.log('onSignUpPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View>
          <Text style={styles.title}>Confirm you email</Text>
        </View>
        <CustomInput
          name="code"
          placeholder={'Enter your confirmation code.'}
          control={control}
          rules={{required: 'Code is required *'}}
        />
        <CustomButton
          text={'Confirm'}
          onPress={handleSubmit(onConfirmPressed)}
          type={'PRIMARY'}
        />

        <CustomButton
          text={'Resend'}
          onPress={onResendPressed}
          type={'SECONDARY'}
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

export default ConfirmEmailScreen;
