import React from 'react';
import { Text, Pressable } from 'react-native';
import styles from './styles';

export default function FloatButton(props) {

  const { onPress, title = '+' } = props;

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
