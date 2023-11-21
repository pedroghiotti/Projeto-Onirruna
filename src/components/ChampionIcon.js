import { Image, Pressable, View } from "react-native";

const ChampionIcon = (props) => 
{
    const { background = require('/assets/banner.jpg') } = props;

    return(
        <Pressable
            onPress={ () => alert('Champion Banner Clicked')}
            style = {{ width: '10rem', aspectRatio: 1, borderRadius: '50%', overflow: 'hidden', marginRight: '1rem', marginLeft: props.offset }}
        >

        <Image
        source = { background }
        style = {{ width: '100%', aspectRatio: 1 }}
        />

        </Pressable>
    );
}

export default ChampionIcon;