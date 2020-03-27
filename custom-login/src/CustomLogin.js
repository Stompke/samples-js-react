// src/Login.jsx

import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import { useOktaAuth } from '@okta/okta-react';

import config from './config';

const Login = ({ baseUrl }) => { 
  const { authState } = useOktaAuth();

  const { pkce, issuer, clientId, redirectUri, scopes } = config.oidc;


  if (authState.isPending) { 
    return <div>Loading...</div>;
  }
  return authState.isAuthenticated ?
    <Redirect to={{ pathname: '/' }}/> :
    <LoginForm baseUrl={issuer.split('/oauth2')[0]} />;
};

export default Login