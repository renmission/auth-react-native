import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {INavigationProps} from '../../../types.d';
import {useForm} from 'react-hook-form';

const NewPasswordScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log(errors);

  const navigation = useNavigation<INavigationProps>();

  const onSubmitPressed = (data: any) => {
    console.log(data);

    navigation.navigate('Home');
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
          name="code"
          placeholder={'Enter your code'}
          control={control}
          rules={{
            required: 'Password is required *',
          }}
        />
        <CustomInput
          name="password"
          placeholder={'Enter your new password'}
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required *',
            minLength: {value: 6, message: 'Atleast 6 characters.'},
          }}
        />
        <CustomButton
          text={'Submit'}
          onPress={handleSubmit(onSubmitPressed)}
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

export default NewPasswordScreen;
