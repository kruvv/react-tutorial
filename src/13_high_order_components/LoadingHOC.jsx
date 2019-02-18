import React, { Component } from 'react';
import './loadingHOC.css';

const isEmpty = (prop) => (
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty('lenght') && prop.lenght === 0) ||
  (prop.constructor === Object && Object.keys(prop).lenght === 0)
);

const LoadingHOC = (loadingProp) => (WrappedComponent) => {
  return class LoadingHOC extends Component {
    render() {
      return isEmpty(this.props[loadingProp]) ?
      <div className="loader" />
      : <WrappedComponent {...this.props} />
    }
  }
}
export default LoadingHOC
