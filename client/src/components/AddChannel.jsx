import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const AddChannel = (props) => {
  const handleKeyUp = (evt) => {
    if(evt.keyCode === 13) {
      evt.persist();
      props.AddChannel({
        variables: {
          name: evt.target.value
        }
      }).then((res) => {
        evt.target.value = '';
      })
    }
  };
  return (
    <input
      type="text"
      placeholder="New Channel"
      onKeyUp={handleKeyUp}
    />
  );
}

const AddChannelMutation = gql`
  mutation addChannel($name: String!) {
    addChannel(name: $name) {
      id
      name
    }
  }
`;

const AddChannelWithMutation = compose(
  graphql(AddChannelMutation, { name: "AddChannel"})
)(AddChannel);

export default AddChannelWithMutation;
