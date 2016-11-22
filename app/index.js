import React, { Component } from 'react';
import {
  View
} from 'react-native';

import PersonList from './components/PersonList';
import { people } from './modules/mockData';


export default class ReachOut extends Component {
  render() {
    return (
      <View>
        <PersonList people={people} />
      </View>
    );
  }
}
