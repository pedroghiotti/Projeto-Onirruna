import { Button, View, TextInput, ImageBackground, ScrollView, Pressable, Image, FlatList } from "react-native";
import { useState, useContext, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Separator from '/src/components/Separator.js';
import { Favorites } from "/App.js";
import ChampionIcon from "./ChampionIcon";
import { useFonts } from "expo-font";

const SearchScreen = ({route, navigation}) =>
{
  useFonts({
    'Spiegel': require('/assets/fonts/Spiegel-OTF/Spiegel-Regular.otf')
  });

  const Champions = (require('/src/data/champion.json')).data;

  const [roleFilter, setRoleFilter] = useState(0);
  const filterValues = { 0: 'any', 1: 'top', 2: 'jg', 3: 'mid', 4: 'adc', 5: 'sup' };

  const [filteredList, setFilteredList] = useState(Object.keys(Champions));
  const [queryString, setQueryString] = useState('');
  const [queriedList, setQueriedList] = useState(Object.keys(Champions));
  
  const updateFilteredList = () =>
  { 
    if(roleFilter == 0)
    {
      setFilteredList(Object.keys(Champions));
      return;
    }

    const filtered = [];
    Object.values(Champions).forEach((champion, i) =>
    {
      if( champion.roles.includes(filterValues[roleFilter]) )
      {
        filtered.push(Object.keys(Champions)[i])
      }
    });

    setFilteredList(filtered);
  }
  
  const updateQueriedList = () =>
  {
    const regex = RegExp(`.*${queryString}.*`, 'i');
    setQueriedList( filteredList.filter((queryString) => regex.test(queryString)) );
  }

  useEffect(updateFilteredList, [roleFilter]);
  useEffect(updateQueriedList, [queryString, filteredList]);

  return(
    <ImageBackground
    source = { require('/assets/sr_bg.jpg') }
    style = {{ height: '100%' }}
    >
      <LinearGradient
        colors = {['#0A0A0C', 'transparent']}
        locations={[0, 1]}
        style = {{ height: '100%', padding: '1rem', paddingBottom: 0, gap: '1rem' }}
      >
        <View
          style = {{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            gap: '.5rem'
          }}
        >
          <TextInput
            placeholder = 'Pesquisa...'
            placeholderTextColor={'rgba(255, 255, 255, .5)'}
            style = {{
              fontSize: '3rem',
              width: '100%',
              fontFamily: 'Spiegel',
              color: 'white',
              outlineStyle: 'none'
            }}
            onChangeText={ setQueryString }
          />

          <Pressable style={{width: '4rem'}} onPress={() => setRoleFilter(roleFilter >= 5 ? 0 : roleFilter + 1)}>
            <Image style={{width: '100%', aspectRatio: 1}} source={require(`/assets/${filterValues[roleFilter]}Icon.png`)}/>
          </Pressable>;
          
          <Pressable style={{width: '4rem'}} onPress={() => { if(queriedList.length > 0) navigation.navigate('ChampionScreen', {championName: queriedList[0]}) }}>
            <Image style={{width: '100%', aspectRatio: 1}} source={require('/assets/searchIcon.png')}/>
          </Pressable>;
        </View>

        <Separator/>
        
        <ScrollView
          showsVerticalScrollIndicator = {false}
        >
          <FlatList
            data={ queriedList }
            keyExtractor={(item) => item}
            renderItem={ ({item}) => <ChampionIcon name={item} navigation={navigation}></ChampionIcon> }
            horizontal={false}
            numColumns={3}
            columnWrapperStyle={{ justifyContent: 'space-between', gap: '1rem' }}
          />
        </ScrollView>

      </LinearGradient>
    </ImageBackground>
  );
}

export default SearchScreen;