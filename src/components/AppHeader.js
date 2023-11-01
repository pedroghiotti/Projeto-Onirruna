import { View, Image, Pressable, StyleSheet } from "react-native";

const AppHeader = ({route, navigation}) =>
{
    const headerHeight = 4;
    const headerPadding = 1;
    const searchIconWidth = headerHeight - headerPadding;
    const appIconWidth = headerHeight;

    const styles = StyleSheet.create({
        element: {aspectRatio: 1, marginVertical: 'auto'},
        image: {width: '100%', aspectRatio: 1},
        container: {
            width: '100%',
            height: `${headerHeight}rem`,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: `${headerPadding}rem`,
            backgroundColor: '#111111',
            borderBottomWidth: '3px',
            borderBlockColor: '#1A1A1A'
        }
    });

    let backButton, searchButton;

    switch(route.name)
    {
        case "HomeScreen":
            backButton = <View style={[{width: `${searchIconWidth}rem`}, styles.element]}></View>;
            searchButton =
            <Pressable style={[{width: `${searchIconWidth}rem`}, styles.element]} onPress={() => navigation.navigate('SearchScreen')}>
                <Image style={{width: '100%', aspectRatio: 1}} source={require('/assets/searchIcon.png')}/>
            </Pressable>;
        break;
        case "SearchScreen":
        case "ChampionScreen":
            backButton =
            <Pressable style={[{width: `${searchIconWidth}rem`}, styles.element]} onPress={() => navigation.goBack()}>
                <Image style={{width: '100%', aspectRatio: 1}} source={require('/assets/backIcon.png')}/>
            </Pressable>;
            searchButton = <View style={[{width: `${searchIconWidth}rem`}, styles.element]}></View>;
        break;
    }

    return(
        <View style={styles.container}>
        
        {backButton}

        <Pressable style={[{width: `${appIconWidth}rem`}, styles.element]} onPress={() => navigation.navigate('HomeScreen')}>
            <Image style={{width: '100%', aspectRatio: 1}} source={require('/assets/appIcon.png')}/>
        </Pressable>

        {searchButton}

        </View>
    );
}

export default AppHeader;