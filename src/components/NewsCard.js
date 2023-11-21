import { Text, ImageBackground, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { View } from "react-native-web";

const NewsCard = (props) => 
{
    useFonts({
        'BeaufortForLol_Bold': require('/assets/fonts/BeaufortForLol-OTF/BeaufortForLol-Bold.otf'),
        'BeaufortForLol_Light': require('/assets/fonts/BeaufortForLol-OTF/BeaufortForLol-Light.otf')
    });

    const { title = 'title', blurb = 'lorem ipsum dolor sit amet', background = require('/assets/banner.jpg') } = props;

    return(
        <Pressable
            onPress={ () => alert('News Banner Clicked')}
            style = {{ marginTop: '1.5rem' }}
        >

        <ImageBackground
        source = { background }
        style = {{ height: '20rem', width: '100%', borderRadius: '2rem', overflow: 'hidden', shadowRadius: 10 }}
        >
            <LinearGradient
                colors = {['transparent', '#0A0A0C']}
                locations={[.4, 1]}
                style = {{ height: '100%', paddingVertical: '2rem', paddingHorizontal: '1rem' }}
            >
                <View
                    style={{ marginTop: 'auto', textAlign: 'left' }}
                >
                    <Text
                        style = {{textTransform: 'uppercase', fontSize: '3rem', fontFamily: 'BeaufortForLol_Bold', color: 'white'}}
                    > {title} </Text>

                    <Text
                        style = {{textTransform: 'uppercase', fontSize: '2rem', fontFamily: 'BeaufortForLol_Light', color: 'white'}}
                    > {blurb} </Text>
                </View>
            </LinearGradient>
        </ImageBackground>

        </Pressable>
    );
}

export default NewsCard;