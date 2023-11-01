import { Button, View, TextInput } from "react-native";
import { useState } from "react";

const SearchScreen = ({route, navigation}) =>
{
  const [searchQuery, setSearchQuery] = useState('');

  return(
    <View>
      <TextInput onChangeText={setSearchQuery}></TextInput>
      <Button
        title="Search"
        onPress={() => navigation.navigate("ChampionScreen", {championName: searchQuery})}
      />
    </View>
  );
}

export default SearchScreen;