import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButton = () => {
  const onSignInFacebook = () => {
    console.log('onSignInFacebook');
  };

  const onSignInGoogle = () => {
    console.log('onSignInGoogle');
  };

  const onSignInApple = () => {
    console.log('onSignInApple');
  };
  return (
    <>
      <CustomButton
        text={'Sign In with Facebook'}
        onPress={onSignInFacebook}
        type={'PRIMARY'}
        bgColor={'#E7EAF4'}
        fgColor={'#4765A9'}
      />
      <CustomButton
        text={'Sign In with Google'}
        onPress={onSignInGoogle}
        type={'PRIMARY'}
        bgColor={'#FAE9EA'}
        fgColor={'#DD4D44'}
      />
      <CustomButton
        text={'Sign In with Apple'}
        onPress={onSignInApple}
        type={'PRIMARY'}
        bgColor={'#E3E3E3'}
        fgColor={'#363636'}
      />
    </>
  );
};

export default SocialSignInButton;
