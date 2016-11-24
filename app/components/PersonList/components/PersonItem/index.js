import React from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

export default function PersonItem(props) {
  const debt = (1 / props.data.frequency) * props.data.missed * Math.log(props.data.frequency);
  const style = {
    flexDirection: 'row',
    padding: 20,
    margin: 5,
    backgroundColor: '#BBB'
  };
  return (
    <View style={style}>
      <Image
        style={{width: 50, height: 50, borderRadius: 25, marginRight: 20}}
        source={{uri: props.data.avatar}}
      />
      <View>
        <Text>{props.data.name}</Text>
        <Text style={{fontWeight: 'bold'}}>Debt: {debt}</Text>
        <Text>f: {props.data.frequency}</Text>
        <Text>m: {props.data.missed}</Text>
      </View>
    </View>
  );
}
