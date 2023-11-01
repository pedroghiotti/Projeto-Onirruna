import { Text, View, Image } from "react-native";

const ChampionScreen = ({route, navigation}) =>
{
  const championName = route.params.championName.charAt(0).toUpperCase() + route.params.championName.slice(1);

  return(
    <View>
      <Text>{championName}</Text>
      <Image
      source={ `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg` }
      style={{width: "100%", aspectRatio: 4/3}}/>
    </View>
  );
}

export default ChampionScreen;