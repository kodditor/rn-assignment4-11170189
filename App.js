import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/Login.page';
import HomePage from './pages/Home.page';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Login'
        component={LoginPage}
      />
      <Stack.Screen 
        name='Home'
        component={HomePage}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
