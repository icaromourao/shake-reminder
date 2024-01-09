import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import TaskList from './src/components/TaskList';
import FloatButton from './src/components/FloatButton'

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.viewContainer}>
        <StatusBar style="auto" />
        <Title text='Tarefas' />
        <TaskList />
        <FloatButton onPress={() => {}}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    position: 'relative',
  },
  viewContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
});
