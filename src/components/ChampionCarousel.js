import { Image, Pressable, View, FlatList } from "react-native";
import ChampionIcon from "./ChampionIcon";
import { useContext, useEffect, useRef } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { Favorites } from "../../App.js";

const ChampionCarousel = ( { navigation } ) => 
{
    const Champions = Object.keys( (require('/src/data/champion.json')).data );
    
    const FlatListRef = useRef();

    let flatListOffset = 0;
    const OnClickOffset = 400;

    return(
        <View style = {{
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            height: '10rem'
        }}>

            <LinearGradient
                colors = {['#0A0A0C', 'transparent']}
                locations={[1, 1]}
                style = { {position: 'absolute', top: 0, bottom: '-1.4rem', left: 0, right: 0} }
            ></LinearGradient>

            <FlatList
                ref = { FlatListRef }
                data = { Champions }
                extraData = { Champions }
                renderItem = {({item, index}) =>
                {
                    let offset = index == 0 ? '5rem' : 0;

                    return( <ChampionIcon name={item} marginR = '1rem' offset={offset} navigation={navigation}></ChampionIcon> );
                }}
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                onScroll={(e) => { flatListOffset = e.nativeEvent.contentOffset.x }}

                style = {{
                    maxHeight: '10rem',
                }}
            />

            <LinearGradient
                start={{ x: 0, y: .5 }}
                end={{ x: 1, y: .5 }}
                colors = {['#0A0A0C', 'transparent', 'transparent', '#0A0A0C']}
                locations={[0, .125, .875, 1]}
                style = { {position: 'absolute', top: 0, bottom: 0, left: 0, right: 0} }
                pointerEvents='none'
            ></LinearGradient>

            <Pressable
                style = {{
                    width: '5rem',
                    aspectRatio: 1,
                    position: 'absolute',
                    left: 0
                }}
                onPress={() => FlatListRef.current.scrollToOffset({offset: flatListOffset - OnClickOffset}) }
            >
                <Image source = {require('/assets/backIcon.png')} style = {{width: '100%', aspectRatio: 1}}/>
            </Pressable>

            <Pressable
                style = {{
                    width: '5rem',
                    aspectRatio: 1, 
                    transform: [{scaleX: '-1'}],
                    position: 'absolute',
                    right: 0
                }}
                onPress={() => FlatListRef.current.scrollToOffset({offset: flatListOffset + OnClickOffset}) }
            >
                <Image source = {require('/assets/backIcon.png')} style = {{width: '100%', aspectRatio: 1}}/>
            </Pressable>
        </View>
    );
}

export default ChampionCarousel;