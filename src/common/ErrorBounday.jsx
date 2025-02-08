import React, { Component } from "react";
import FallBackUI from "./FallBackUI";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: {  componentStack: ''} };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Error Bounday caught an error: ", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <FallBackUI />;
    }
    return this.props.children;
  }
}
