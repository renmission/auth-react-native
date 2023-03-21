import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {INavigationProps} from '../../../types.d';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState<string>('');
  const navigation = useNavigation<INavigationProps>();

  const onConfirmPressed = () => {
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
          placeholder={'Enter your confirmation code.'}
          value={code}
          setValue={setCode}
        />
        <CustomButton
          text={'Confirm'}
          onPress={onConfirmPressed}
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
