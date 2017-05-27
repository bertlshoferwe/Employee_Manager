import React, { Component } from 'react';
import { Text} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, registerUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  LogonButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  RegisterButtonPress(){
    const { email, password} = this.props;

    this.props.registerUser({ email, password })
  }



  render() {

    const Login_Register = ( this.props.loading ) ? 
                                <CardSection> 
                                    <Spinner size= "small" /> 
                                 </CardSection> 
                                :
                                <CardSection>
                                  <Button onPress={this.LogonButtonPress.bind(this)}>
                                    Login
                                  </Button>
                                  <Button onPress={this.RegisterButtonPress.bind(this)}>
                                    Register
                                  </Button>
                                </CardSection>;
                              


    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        
          { Login_Register }
        
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, registerUser
})(LoginForm);
