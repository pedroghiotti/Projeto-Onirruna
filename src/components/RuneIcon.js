import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import runeIcons from "./runeIcons";

const RuneIcon = (props) => 
{
    const { name, navigation, size = '2rem', margin = '.5rem' } = props;
    const [backgroundUri, setBackgroundUri] = useState(runeIcons[name]);
    
    return(
        <View
            style = {{ width: size, aspectRatio: 1, borderRadius: '50%', overflow: 'hidden',  margin: margin, border: '4px solid #E3BE71', marginHorizontal: 'auto' }}
        >

            <Image
                source = { backgroundUri }
                style = {{ width: '100%', aspectRatio: 1 }}
            />

        </View>
    );
}

export default RuneIcon;