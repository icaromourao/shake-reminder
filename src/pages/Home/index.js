import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import TaskList from '../../components/TaskList';
import FloatButton from '../../components/FloatButton'
import styles from './styles';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.viewContainer}>
        <StatusBar style="auto" />
        <TaskList />
        <FloatButton onPress={() => {
          navigation.navigate('CreateTask');
        }}/>
      </View>
    </SafeAreaView>
  );
}
