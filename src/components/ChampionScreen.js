import { Text, View, Image } from "react-native";
import Heading_1 from '/src/components/Heading_1.js';
import Heading_2 from '/src/components/Heading_2.js';
import Separator from '/src/components/Separator.js';

const ChampionScreen = ({route, navigation}) =>
{
  const championName = route.params.championName.charAt(0).toUpperCase() + route.params.championName.slice(1);

  return(
    <View style={{backgroundColor: 'grey'}}>
      <Text>{championName}</Text>
      <Image
      source={ `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg` }
      style={{width: "100%", aspectRatio: 4/3}}/>

      <Heading_1 title='Heading 1'></Heading_1>
      <Heading_2 title='Heading 2'></Heading_2>
      <Separator></Separator>

    </View>
  );
}

export default ChampionScreen;