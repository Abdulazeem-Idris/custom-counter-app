import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Error Boundary Test</h1>
          <p>An error occurred within this component.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
