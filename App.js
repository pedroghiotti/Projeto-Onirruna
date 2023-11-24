import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppHeader from './src/components/AppHeader.js';
import HomeScreen from './src/components/HomeScreen.js';
import SearchScreen from './src/components/SearchScreen.js';
import ChampionScreen from './src/components/ChampionScreen.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect } from 'react';

const Stack = createNativeStackNavigator();

const App = () =>
{
  useEffect(() => { FetchFavorites(); }, []);

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

let favorites = createContext(['Camille', 'Fizz']);

const StoreFavorites = (Favorites) => 
{
  try { AsyncStorage.setItem('Favorites', JSON.stringify(Favorites)); }
  catch(e) { console.log(e); }
};

const FetchFavorites = async () => 
{
  try { favorites = await AsyncStorage.getItem('Favorites').then((r) => JSON.parse(r)); }
  catch(e) 
  {
    console.log(e);
    favorites = [];
  }
};

const StoreFavoritesContext = createContext(StoreFavorites);

export default App;
export { favorites as Favorites, StoreFavoritesContext as StoreFavorites };