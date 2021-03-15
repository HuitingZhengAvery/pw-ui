import React from 'react';
import LandingPage from './LandingPage';
import ErrorPage from './ErrorPage';

// TODO: Resolve es6 issue to use this class for error boudary
export default class Base {
  constructor() {
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.log("an unexpected error happened:", error.toString());
  }

  render() {
    return (
      <div className="base">
        {!this.state.hasError && <LandingPage />}
        {this.state.hasError && <ErrorPage />}
      </div>
    )
  }
}
