import React from 'react';

import { View } from 'react-native';
import PageContainer from '../../layout/PageContainer';
import { AccountForm } from '../../layout/AccountForm';

import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';

import styles from '../../../styles';

export interface AccountContainerProps {
  navigation: any;
}

export const AccountContainer = ({ navigation }: AccountContainerProps) => {
  return (
    <PageContainer>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            <AccountForm navigation={navigation} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </PageContainer>
  );
};

export default AccountContainer;
