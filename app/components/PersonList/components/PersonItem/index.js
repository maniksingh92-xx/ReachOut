import React from 'react';
import {
  Text
} from 'react-native';

export default function PersonItem(props) {
  return (
    <Text>{props.data.name}</Text>
  );
}
