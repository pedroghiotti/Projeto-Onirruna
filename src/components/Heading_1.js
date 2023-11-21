import { Text, View, Image } from "react-native";
import { useFonts } from 'expo-font';

const Heading_1 = (props) => 
{
    useFonts({
        'BeaufortForLol': require('/assets/fonts/BeaufortForLol-OTF/BeaufortForLol-Bold.otf')
    });

    const {fontSize = '5rem', title = 'title'} = props;

    return(
        <View
            style = {{width: '100%'}}
        >
            <Text
                style = {{textTransform: 'uppercase', textAlign: 'center', fontSize: fontSize, fontFamily: 'BeaufortForLol', color: 'white'}}
            > {title} </Text>

            <Image
                source = { require('/assets/divider_2.png') }
                style = {{width: '100%', aspectRatio: 10/1, resizeMode: 'contain'}}
            ></Image>
        </View>
    );
}

export default Heading_1;