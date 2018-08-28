import React, { Component } from 'react';

class ErrorBoundry extends Component {

  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true })
  }

  render() {
    return this.state.hasError ? <h1>Oops. That is not good</h1> : this.props.children;
  }
}

export default ErrorBoundry;