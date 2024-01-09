import { Text } from 'react-native';
import styles from './styles';

export default function Title(props) {
  return (
    <Text style={styles.titleText}>{props.text}</Text>
  );
}
