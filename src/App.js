import React from 'react';
import { hot } from 'react-hot-loader';
import Registrations from './components/Registrations';

import 'bulma';
import 'styles';

const App = () => (
  <div>
    <div className="hero is-warning">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-v-centered">
            <div className="column">
              <h1 className="title">Natal.js</h1>
              <h2 className="subtitle">Credentials Meetup</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Registrations />
  </div>
);

export default hot(module)(App);
