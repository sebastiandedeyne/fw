import React from 'react';

export default class Index extends React.Component {
  render() {
    return React.createElement('h1', { 
      children: [this.props.title]
    });
  }
}
