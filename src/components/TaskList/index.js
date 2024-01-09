import { Text, View, FlatList, Image } from 'react-native';
import styles from './styles';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const DATA = require('../../resources/taskData.json');

export default function TaskList() {
  return (
    <FlatList
      data={DATA}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={{ paddingBottom: 48 }}
      renderItem={({item}) =>
      <View style={styles.card}>
        <BouncyCheckbox
          size={25}
          fillColor="#606060"
          unfillColor="#FFFFFF"
          onPress={(isChecked) => {}} />
        <View style={styles.viewText}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.dateViewContainer}>
            <Image
              style={styles.calendarImage}
              source={require('../../../assets/calendar.png')}
            />
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>
        <Image
          style={styles.settingsImage}
          source={require('../../../assets/settings.png')}
          />
      </View>
      }
    />
  );
}
