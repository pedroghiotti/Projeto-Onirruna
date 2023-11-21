import { View, Image } from "react-native";

const Separator = () => 
{
    return(
        <View
            style = {{width: '100%'}}
        >
            <Image
                source = { require('/assets/divider_1.png') }
                style = {{width: '100%', aspectRatio: 15/1, resizeMode: 'contain'}}
            ></Image>
        </View>
    );
}

export default Separator;