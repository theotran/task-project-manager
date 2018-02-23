import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

class AppContentContainer extends Component {

  render() {
    return (
      <div className="appContentContainer">
        {this.props.children}
      </div>
    )
  }
}

export default AppContentContainer;
