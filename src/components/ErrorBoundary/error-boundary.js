import { Component } from "react";
import Error from "../Error";

export default class ErrorBoundary extends Component {
  componentDidCatch(error, errorInfo) {
    return <Error />;
  }
}
