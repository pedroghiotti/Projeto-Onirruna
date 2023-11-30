import { Text, View, Image, ImageBackground } from "react-native";
import Heading_1 from '/src/components/Heading_1.js';
import Heading_2 from '/src/components/Heading_2.js';
import Separator from '/src/components/Separator.js';
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from 'expo-font';
import { FlatList } from "react-native";
import RuneIcon from "./RuneIcon";
import ItemIcon from "./ItemIcon";
import runeIcons from "./runeIcons";

const ChampionScreen = ({route, navigation}) =>
{
  useFonts({
    'BeaufortForLol_Bold': require('/assets/fonts/BeaufortForLol-OTF/BeaufortForLol-Bold.otf'),
    'BeaufortForLol_Light': require('/assets/fonts/BeaufortForLol-OTF/BeaufortForLol-Light.otf'),
    'BeaufortForLol_Regular': require('/assets/fonts/BeaufortForLol-OTF/BeaufortForLol-Regular.otf')
  });

  const championName = route.params.championName.charAt(0).toUpperCase() + route.params.championName.slice(1);
  const data = (require('/src/data/champion.json')).data[championName];

  return(
    <View style={{backgroundColor: '#0A0A0C', paddingBottom: '2rem', gap: '2rem'}}>
      <ImageBackground
        source={ `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg` }
        style={{width: "100%", aspectRatio: 3/2}}
      >
        <LinearGradient
          colors = {['transparent', '#0A0A0C']}
          locations = {[0, 1]}
          style = {{height: '101%', padding: '1rem'}}
        >
          <View
            style = {{marginTop: 'auto'}}
          >
            <Text
              style = {{color: 'white', fontSize: '5rem', fontFamily: 'BeaufortForLol_Bold'}}
            >{championName}</Text>
            <Text
              style = {{color: 'white', fontSize: '3rem', fontFamily: 'BeaufortForLol_Regular'}}
            >{data.title}</Text>
          </View>

        </LinearGradient>
      </ImageBackground>
      <Separator></Separator>

      <Heading_1 title='RUNAS'></Heading_1>

      <ImageBackground
        source={ require(`/assets/${data.runas.primaria[0]}.webp`) }
        style={{width: "100%"}}
      >
        <LinearGradient
          colors = {['#0A0A0C', 'transparent', '#0A0A0C']}
          locations = {[0, .5, 1]}
          style = {{height: '101%'}}
        >
          <View
            style={{ justifyContent: "space-around", flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}
          >
            <View
              style = {{
                  width: '5rem',
                  aspectRatio: 1,
                  left: 0
              }}
            >
              <Image source = {require('/assets/backIcon.png')} style = {{width: '100%', aspectRatio: 1}}/>
            </View>
              
            <View>
            <FlatList
                data={ data.runas.primaria.slice(1, 2) }
                renderItem={ ({item}) => <RuneIcon name={item} navigation={navigation} size='10rem'></RuneIcon> }
                horizontal={false}
              />
              <FlatList
                data={ data.runas.primaria.slice(2) }
                renderItem={ ({item}) => <RuneIcon name={item} navigation={navigation} size='8rem'></RuneIcon> }
                horizontal={false}
              />
            </View>
            <View>
              <FlatList
                data={ data.runas.secundaria.slice(1) }
                renderItem={ ({item}) => <RuneIcon name={item} navigation={navigation} size='6rem'></RuneIcon> }
                horizontal={false}
              />
              <View>
                <FlatList
                  data={ data.runas.aux }
                  renderItem={ ({item}) => <RuneIcon name={item} navigation={navigation} size='4rem'></RuneIcon> }
                  horizontal={false}
                />
              </View>
            </View>

            <View
              style = {{
                width: '5rem',
                aspectRatio: 1, 
                transform: [{scaleX: '-1'}],
                right: 0
            }}
            >
              <Image source = {require('/assets/backIcon.png')} style = {{width: '100%', aspectRatio: 1}}/>
            </View>

          </View>
        </LinearGradient>
      </ImageBackground>
      
      <Separator></Separator>
      <Heading_1 title='ITENS'></Heading_1>
      <Heading_2 title='Iniciais'></Heading_2>

      <ImageBackground
        source={ require(`/assets/Shop.jpg`) }
        style={{width: "100%"}}
      >
        <LinearGradient
          colors = {['#0A0A0C', 'rgba(10, 10, 12, .8)', 'rgba(10, 10, 12, .8)', '#0A0A0C']}
          locations = {[0, .25, .75, 1]}
          style = {{height: '101%'}}
        >
          <View
            style={{ justifyContent: "space-around", flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}
          >
            <View>
              <FlatList
                data={ data.iniciais }
                keyExtractor={(item) => item}
                renderItem={ ({item}) => <ItemIcon name={item} navigation={navigation} size='10rem' margin='1rem'></ItemIcon> }
                horizontal={false}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'center'}}
              />
            </View>
          </View>
      
          <Heading_2 title='Build Convencional'></Heading_2>

          <View
            style={{ justifyContent: "space-around", flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}
          >
            <View>
              <FlatList
                data={ data.build }
                keyExtractor={(item) => item}
                renderItem={ ({item}) => <ItemIcon name={item} navigation={navigation} size='10rem' margin='1rem'></ItemIcon> }
                horizontal={false}
                numColumns={2}
              />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>

    </View>
  );
}

export default ChampionScreen;