import React from 'react';
import classnames from 'classnames';
import debounce from 'lodash.debounce';
import * as Registration from '../api/registrations';

class Registrations extends React.Component {
  state = {
    registrations: [],
    typeSearch: 'name',
    search: '',
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState(
      {
        [name]: value,
      },
      this.onSearchDebounce,
    );
  };

  handleSearch = event => {
    event.persist();

    this.setState(
      {
        search: event.target.value.trim(),
      },
      this.onSearchDebounce,
    );
  };

  search = async () => {
    const { search, typeSearch } = this.state;

    const query = {
      [typeSearch]: search,
    };

    const { data } = await Registration.get(query);

    this.setState({
      registrations: data.data,
    });
  };

  onSearchDebounce = debounce(this.search, 400);

  async componentDidMount() {
    const { data } = await Registration.get();

    this.setState({
      registrations: data.data,
    });
  }

  async setAppear(id, appear) {
    const { data } = await Registration.put(id, { appear });

    const { registrations } = this.state;

    this.setState({
      registrations: registrations.map(registration =>
        registration.id === id ? data : registration,
      ),
    });
  }

  render() {
    const { registrations } = this.state;

    return (
      <div className="section">
        <div className="container">
          <div className="field has-addons">
            <p className="control">
              <span className="select">
                <select name="typeSearch" onChange={this.handleInput}>
                  <option value="name">name</option>
                  <option value="email">email</option>
                </select>
              </span>
            </p>
            <p className="control is-expanded has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="Search"
                onChange={this.handleSearch}
              />
              <span className="icon is-small is-right">
                <i className="fas fa-search" />
              </span>
            </p>
          </div>
          {!!registrations.length && (
            <table className="table is-fullwidth">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th style={{ width: '170px' }}>Appeared?</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map(registration => (
                  <tr key={registration.id}>
                    <td>{registration.name}</td>
                    <td>{registration.email}</td>
                    <td>
                      <div className="field has-addons">
                        <p className="control">
                          <button
                            className={classnames('button', { 'is-success': registration.appear })}
                            type="button"
                            onClick={() => this.setAppear(registration.id, true)}
                          >
                            <span className="icon is-small">
                              <i className="fas fa-check" />
                            </span>
                            <span>yes</span>
                          </button>
                        </p>
                        <p className="control">
                          <button
                            className={classnames('button', { 'is-danger': !registration.appear })}
                            type="button"
                            onClick={() => this.setAppear(registration.id, false)}
                          >
                            <span className="icon is-small">
                              <i className="fas fa-times" />
                            </span>
                            <span>Not</span>
                          </button>
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
}

export default Registrations;
