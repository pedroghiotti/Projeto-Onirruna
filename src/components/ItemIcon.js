import { useEffect, useState } from "react";
import { Image, View } from "react-native";

const ChampionIcon = (props) => 
{
    const { name, navigation, size = '2rem', margin } = props;
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
        <View
            style = {{ width: size, aspectRatio: 1, margin: margin, border: '4px solid #E3BE71'}}
        >

            <Image
                source = { backgroundUri }
                style = {{ width: '100%', aspectRatio: 1 }}
            />

        </View>
    );
}

export default ChampionIcon;