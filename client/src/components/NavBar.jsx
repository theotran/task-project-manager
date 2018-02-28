import React, { Component } from 'react';
// import gql from 'graphql-tag';
// import { graphql, compose } from 'react-apollo';
import {
  withRouter,
  Link
} from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

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
              as={Link}
              to='/'
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              >
                Home
            </Menu.Item>

            <Menu.Item
              as={Link}
              to='/sign-in'
              name='sign-in'
              active={activeItem === 'sign-in'}
              onClick={this.handleItemClick}
              >
                Sign-in
            </Menu.Item>

            <Menu.Item
              as={Link}
              to='/task-form'
              name='task-form'
              active={activeItem === 'task-form'}
              onClick={this.handleItemClick}
              >
                Task Form
            </Menu.Item>

            <Menu.Item
              as={Link}
              to='/task-list'
              name='task-list'
              active={activeItem === 'task-list'}
              onClick={this.handleItemClick}
              >
                Task List
            </Menu.Item>
          </Menu>
      </div>
    )
  }
}

export default withRouter(NavBar);
