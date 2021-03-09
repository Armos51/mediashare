import * as React from 'react';
import { Platform } from 'react-native';
import { Container, Content, Header, Body, Title, Button, Text, View } from 'native-base';
import { Observable } from 'rxjs';
import { LoginDto, LoginResponseDto } from '../../api';

export interface LoginProps {
  loginForm: any;

  onLogin: (loginDto: LoginDto) => Observable<LoginResponseDto>;
}

export interface LoginState {}

class Login extends React.Component<LoginProps, LoginState> {
  // <Icon name="flash" style={{ fontSize: 104 }} />

  render() {
    return (
      <Container>
        <Header style={{ height: 200 }}>
          <Body style={{ alignItems: 'center' }}>
            <Title>Blue Collar Software</Title>
            <View padder>
              <Text style={{ color: Platform.OS === 'ios' ? '#000' : '#FFF' }} />
            </View>
          </Body>
        </Header>
        <Content>
          {this.props.loginForm}
          <View padder>
            <Button
              block
              onPress={() => this.props.onLogin(this.props.loginForm).subscribe((obs) => console.log('obs', obs))}
            >
              <Text>Login</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Login;
