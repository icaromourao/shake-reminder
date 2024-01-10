import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  list: {
    marginTop: 8,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#222222',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
    paddingLeft: 16,
  },
  viewText: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  dateViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarImage: {
    height: 13,
    width: 13,
    marginRight: 4,
  },
  date: {
    marginTop: 2,
    fontSize: 9.89,
    color: '#606060'
  },
  settingsImage: {
    alignSelf: 'center',
    width: 20,
    height: 20,
  },
});

export default styles;
