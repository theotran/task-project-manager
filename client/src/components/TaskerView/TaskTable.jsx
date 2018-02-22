import React, { Component } from 'react';
import { Icon, Table } from 'semantic-ui-react'

class TaskTable extends Component {
  state = {

  }

  render(){
    return (
      <div className='taskTable-container'>
        <h1>Task List</h1>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Job ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Timeline</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Assigned To</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>The Hulk</Table.Cell>
              <Table.Cell>Immediately</Table.Cell>
              <Table.Cell>Physical Task/Service</Table.Cell>
              <Table.Cell>$25 Per Job</Table.Cell>
              <Table.Cell>Hulk need something smashed now!</Table.Cell>
              <Table.Cell positive>
                <Icon name='checkmark' />
                  Completed
              </Table.Cell>
              <Table.Cell>Bruce Banner</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>Iron Man</Table.Cell>
              <Table.Cell>Within 24 Hours</Table.Cell>
              <Table.Cell>Personal Errand</Table.Cell>
              <Table.Cell>$20 Hourly</Table.Cell>
              <Table.Cell>I need to find salt for my Pepper</Table.Cell>
              <Table.Cell negative>
                <Icon name='close' />
                  Incomplete
              </Table.Cell>
              <Table.Cell>Agent Coulson</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>3</Table.Cell>
              <Table.Cell>Black Panther</Table.Cell>
              <Table.Cell>Within 48 Hours</Table.Cell>
              <Table.Cell>Currier Service (Pickup/Delivery)</Table.Cell>
              <Table.Cell>$50 Per Job</Table.Cell>
              <Table.Cell>I need someone to deliver my vibranium to Wakanda</Table.Cell>
              <Table.Cell negative>
                <Icon name='close' />
                  Incomplete
              </Table.Cell>
              <Table.Cell>Ulysses Klaue</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>4</Table.Cell>
              <Table.Cell>Peter Quil</Table.Cell>
              <Table.Cell>Within 72 Hours</Table.Cell>
              <Table.Cell>Task Over Time</Table.Cell>
              <Table.Cell>$100 Per Job</Table.Cell>
              <Table.Cell>I need someone to find me my Ratchet</Table.Cell>
              <Table.Cell positive>
                <Icon name='checkmark' />
                  Completed
              </Table.Cell>
              <Table.Cell>Groot</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default TaskTable;
