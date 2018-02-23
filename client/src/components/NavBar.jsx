import React, { Component } from 'react';
// import gql from 'graphql-tag';
// import { graphql, compose } from 'react-apollo';
import { Button, Menu, Icon } from 'semantic-ui-react';

class NavBar extends Component {
  state = {

  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>
        {/* <h1 className="navbar">Tasker</h1> */}
        <Menu inverted>
          <Menu.Item>
            <Icon name='idea' />
          </Menu.Item>

          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>

          <Menu.Item
            name='sign-in'
            active={activeItem === 'sign-in'}
            onClick={this.handleItemClick}
          >
            Sign-in
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default NavBar;
