import { useEffect, useState } from "react";
import { Image, View } from "react-native";

const ItemIcon = (props) => 
{
    const { name, size = '2rem', margin } = props;

    return(
        <View
            style = {{ width: size, aspectRatio: 1, margin: margin, border: '4px solid #E3BE71'}}
        >

            <Image
                source = { require(`/assets/itens/${name}`) }
                style = {{ width: '100%', aspectRatio: 1 }}
            />

        </View>
    );
}

export default ItemIcon;