import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

const timeline = [
  { key: 'immediately', text: 'Immediately', value: 'immediately' },
  { key: '24hrs', text: 'Within 24 Hours', value: '24hrs' },
  { key: '48hrs', text: 'Within 48 Hours', value: '48hrs' },
  { key: '72hrs', text: 'Within 72 Hours', value: '72hrs' },
  { key: 'requestDate', text: 'Request a Date', value: 'requestDate' }
];

const description = [
  { key: 'personalErrand', text: 'Personal Errand', value: 'personalErrand' },
  { key: 'currierService', text: 'Currier Service (Pickup/Delivery)', value: 'currierService' },
  { key: 'physicalTaskService', text: 'Physical Task/Service', value: 'physicalTaskService' },
  { key: 'taskOverTime', text: 'Task Over Time', value: 'taskOverTime' }
];

const payType = [
  { key: 'hourly', text: 'Hourly', value: 'hourly' },
  { key: 'perJob', text: 'Per Job', value: 'perJob' }

];

class TaskForm extends Component {
  state = {

  }

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <div className='taskForm-container'>
        <h1>Task Form</h1>
        <Form>
          <Form.Group className='row' widths='equal'>
            <Form.Input fluid className='col-md-4' label='First Name*' placeholder='First Name' />
            <Form.Input fluid className='col-md-4' label='Last Name*' placeholder='Last Name' />
            <Form.Input fluid className='col-md-4' label='Username' placeholder='Username' />
          </Form.Group>
          <Form.Group className='row' widths='equal'>
            <Form.Input fluid className='col-md-4' label='Email*' placeholder='Email' />
            <Form.Input fluid className='col-md-4' label='Cell Phone #*' placeholder='Cell Phone #' />
            <Form.Input fluid className='col-md-4' label='Effort Level' placeholder='Estimated amount of hours to complete task' />
          </Form.Group>
          <Form.Group className='row' widths='equal'>
            <Form.Select fluid className='col-md-3' label='Timeline*' options={timeline} placeholder='Pick a completion time' />
            <Form.Select fluid className='col-md-3' label='Category*' options={description} placeholder='Pick a category' />
            <Form.Input fluid className='col-md-3' label='Price*' placeholder='Price willing to pay' />
            <Form.Select fluid className='col-md-3' label='Hourly/Per Job*' options={payType} placeholder='Hourly/Per Job' />
          </Form.Group>
          <Form.Group className='row' widths='equal'>
            {/* <Form.Select fluid className='col-md-3' label='Rate' options={payType} placeholder='Hourly/Per Job' /> */}
          </Form.Group>
          <Form.TextArea label='Description*' placeholder='Task description' />
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default TaskForm;
