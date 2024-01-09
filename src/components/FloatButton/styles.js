import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: '100%',
    backgroundColor: '#08E704',
    bottom: 16,
    right: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  text: {
    fontSize: 40,
    lineHeight: 40,
    color: 'white',
  },
});

export default styles;
