import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {INavigationProps} from '../../../types.d';

const NewPasswordScreen = () => {
  const [code, setCode] = useState<string>('');
  const [newPassword, setNewPassworde] = useState<string>('');

  const navigation = useNavigation<INavigationProps>();

  const onSubmitPressed = () => {
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
          placeholder={'Enter your code'}
          value={code}
          setValue={setCode}
        />
        <CustomInput
          placeholder={'Enter your new password'}
          value={newPassword}
          setValue={setNewPassworde}
        />
        <CustomButton
          text={'Submit'}
          onPress={onSubmitPressed}
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
