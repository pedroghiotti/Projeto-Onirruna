import { Image, Pressable, View, FlatList } from "react-native";
import ChampionIcon from "./ChampionIcon";
import { useRef } from "react";

const ChampionCarousel = (props) => 
{
    const Champions = ['Aatrox', 'Bard', 'Cassiopea', 'Darius', 'Ekko', 'Fiora', 'Gnar', 'Hecarim'];

    const flatList = useRef();
    let flatListOffset = 0;

    const onClickOffset = 400;

    return(
        <View style = {{
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                height: '10rem'
            }}>

            <FlatList
                ref = { flatList }
                data = { Champions }
                renderItem = {({item, index}) =>
                {
                    let offset = index == 0 ? '5rem' : 0;

                    return( <ChampionIcon name={item} offset = {offset}></ChampionIcon> );
                }}
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                onScroll={(e) => { flatListOffset = e.nativeEvent.contentOffset.x }}

                style = {{
                    maxHeight: '10rem',
                }}
            />

            <Pressable
                style = {{
                    width: '5rem',
                    aspectRatio: 1,
                    position: 'absolute',
                    left: 0
                }}
                onPress={() => flatList.current.scrollToOffset({offset: flatListOffset - onClickOffset}) }
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
                onPress={() => flatList.current.scrollToOffset({offset: flatListOffset + onClickOffset}) }
            >
                <Image source = {require('/assets/backIcon.png')} style = {{width: '100%', aspectRatio: 1}}/>
            </Pressable>
        </View>
    );
}

export default ChampionCarousel;