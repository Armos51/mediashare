import * as React from 'react';
import { Image, Platform } from 'react-native';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Button,
  Text,
  View,
  Icon,
  Footer,
} from 'native-base';
//import styles from "./styles";
export interface Props {
  loginForm: any;
  onLogin: Function;
}
export interface State {}
class Login extends React.Component<Props, State> {
  // <Icon name="flash" style={{ fontSize: 104 }} />
  render() {
    return (
      <Container>
        <Header style={{ height: 200 }}>
          <Body style={{ alignItems: 'center' }}>
            <Title>Blue Collar Software</Title>
            <View padder>
              <Text
                style={{ color: Platform.OS === 'ios' ? '#000' : '#FFF' }}
              />
            </View>
          </Body>
        </Header>
        <Content>
          {this.props.loginForm}
          <View padder>
            <Button block onPress={() => this.props.onLogin()}>
              <Text>Login</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Login;
