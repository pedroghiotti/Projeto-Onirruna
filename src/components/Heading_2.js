import { Text, View, Image } from "react-native";
import { useFonts } from 'expo-font';
import Separator from "./Separator";

const Heading_2 = (props) => 
{
    useFonts({
        'BeaufortForLol': require('/assets/fonts/BeaufortForLol-OTF/BeaufortForLol-Bold.otf')
    });

    const {fontSize = '4rem', title = 'title'} = props;

    return(
        <View
            style = {{width: '100%'}}
        >
            <Text
                style = {{textTransform: 'uppercase', textAlign: 'center', fontSize: fontSize, fontFamily: 'BeaufortForLol', color: 'white'}}
            > {title} </Text>

            <Separator/>
        </View>
    );
}

export default Heading_2;