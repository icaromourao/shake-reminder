import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import CreateTask from './src/pages/CreateTask';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ Home }
          options={{ title: 'Tarefas' }}
          />
        <Stack.Screen
          name="CreateTask"
          component={ CreateTask }
          options={{ title: 'Criar nova tarefa' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
