import React from 'react';
import { hot } from 'react-hot-loader';
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

    <div className="section">
      <div className="container">
        <div className="field">
          <p className="control has-icons-right">
            <input className="input" type="text" placeholder="Search by Name or Email" />
            <span className="icon is-small is-right">
              <i className="fas fa-search" />
            </span>
          </p>
        </div>

        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th style={{ width: '170px' }}>Appeared?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>David Costa</td>
              <td>davidcostadev@gmail.com</td>
              <td>
                <div className="field has-addons">
                  <p className="control">
                    <button className="button" type="button">
                      <span className="icon is-small">
                        <i className="fas fa-check" />
                      </span>
                      <span>yes</span>
                    </button>
                  </p>
                  <p className="control">
                    <button className="button is-danger" type="button">
                      <span className="icon is-small">
                        <i className="fas fa-times" />
                      </span>
                      <span>Not</span>
                    </button>
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default hot(module)(App);
