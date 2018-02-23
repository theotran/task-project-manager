import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import AddChannel from './AddChannel';

const ChannelsList = ({ data: {loading, error, tasks }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="channelsList">
      <AddChannel />
      { tasks.map( ch => <div key={ch.id} className="channel">{ch.taskName}</div> ) }
    </div>
  );
};

const channelsListQuery = gql`
   query tasks {
     tasks {
       id
       taskName
       taskerUsername
       taskerEmail
       taskerPhone
       category
       price
     }
   }
 `;

const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);

export default ChannelsListWithData;
