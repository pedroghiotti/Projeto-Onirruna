import { ImageBackground, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Heading_1 from '/src/components/Heading_1.js';
import NewsCard from '/src/components/NewsCard.js';
import ChampionCarousel from "./ChampionCarousel";
import Separator from '/src/components/Separator.js';
import { View } from "react-native-web";
import { useContext } from "react";

const HomeScreen = ({navigation}) => 
{
  const News = [
    {
      key: 0,
      title: 'Preseason Anunciada!',
      blurb: 'Preseason anunciada e chegará em dezembro!'
    },
    {
      key: 1,
      title: 'Placeholder!',
      blurb: 'Placeholder, placeholder placeholder. Placeholder placeholder! Placeholder?'
    },
    {
      key: 2,
      title: 'Título!',
      blurb: 'Conteúdo conteúdo conteúdo, conteúdo conteúdo. Conteúdo conteúdo? Conteúdo.'
    },
    {
      key: 3,
      title: 'Lorem Ipsum!',
      blurb: 'Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.'
    },
  ]

  return(
    <ImageBackground
      source = { require('/assets/sr_bg.jpg') }
      style = { {height: '100%'} }
    >
      <LinearGradient
        colors = {['#0A0A0C', 'transparent']}
        locations={[.2, 1]}
        style = { {height: '100%', padding: '1rem', paddingBottom: 0} }
      >
        
        <ScrollView
          showsVerticalScrollIndicator = {false}
          stickyHeaderIndices={[0]}
        >
          <View>
            <ChampionCarousel navigation = { navigation }></ChampionCarousel>
            <Separator></Separator>
          </View>

          <Heading_1 title = 'news'></Heading_1>
          {News.map((props) => <NewsCard {...props}></NewsCard>)}

        </ScrollView>

      </LinearGradient>
    </ImageBackground>
  );
}

export default HomeScreen;