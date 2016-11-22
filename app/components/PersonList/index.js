import React from 'react';
import {
  ListView
} from 'react-native';

import PersonItem from './components/PersonItem';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default function PersonList(props) {
  const people = ds.cloneWithRows(props.people);

  return (
    <ListView
      dataSource={people}
      renderRow={(person) => <PersonItem data={person} />}
    />
  );
}
