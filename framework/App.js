import React from 'react';
import Router from './router';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.router = new Router(props.routes);

    this.state = {
      path: props.path,
      data: props.data,
    }
  }

  componentDidMount() {
    window.addEventListener('navigate', async (e) => {
      this.setState({
        path: e.detail.path,
        data: await this.getData(e.detail.path),
      });
    });
  }

  getData(path) {
    const headers = new Headers();
    headers.append("Accept", "application/json");

    return fetch(path, { headers })
      .then(response => response.json());
  }

  render() {
    const { view } = this.router.resolve(this.state.path);

    return React.createElement(view, this.state.data);
  }
}
