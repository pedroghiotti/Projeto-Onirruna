import { useEffect, useState } from "react";
import { Image, Pressable } from "react-native";

const ChampionIcon = (props) => 
{
    const { name, navigation } = props;
    const [backgroundUri, setBackgroundUri] = useState('http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/Blitzcrank_5.jpg')

    useEffect(() =>
    {
        async function fetchData()
        {
            const response = await fetch( `http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${name}_0.jpg` );
            if(response.status == 200) setBackgroundUri( `http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${name}_0.jpg` );
        }
        
        fetchData();
    }, []);
    
    
    return(
        <Pressable
            onPress={ () => navigation.navigate('ChampionScreen', {championName: name})}
            style = {{ width: '10rem', aspectRatio: 1, borderRadius: '50%', overflow: 'hidden', marginRight: '1rem', marginLeft: props.offset }}
        >

        <Image
            source = { backgroundUri }
            style = {{ width: '100%', aspectRatio: 1 }}
        />

        </Pressable>
    );
}

export default ChampionIcon;