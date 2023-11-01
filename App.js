import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppHeader from './src/components/AppHeader.js';
import HomeScreen from './src/components/HomeScreen.js';
import SearchScreen from './src/components/SearchScreen.js';
import ChampionScreen from './src/components/ChampionScreen.js';

const Stack = createNativeStackNavigator();
const App = () =>
{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ header: AppHeader }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen}/>
        <Stack.Screen name="ChampionScreen" component={ChampionScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;