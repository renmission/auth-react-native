import React from 'react';
import {Controller, FieldValues} from 'react-hook-form';
import {View, TextInput, StyleSheet, Text} from 'react-native';

type IProps = {
  name: string;
  control: any;
  placeholder: string;
  secureTextEntry?: boolean;
  rules?: Partial<Record<keyof FieldValues, any>>;
};

const CustomInput: React.FC<IProps> = ({
  control,
  name,
  placeholder,
  secureTextEntry,
  rules,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.constainer,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              placeholder={placeholder}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});

export default CustomInput;
