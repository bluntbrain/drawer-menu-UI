import React from 'react'
import { Image } from 'react-native';
import {Block, Text, Button} from 'expo-ui-kit';
import { StyleSheet } from 'react-native';
import {
    DrawerItemList, DrawerItem, createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {Feather, AntDesign} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient'
//import screens
import Dashboard from './screens/Dashboard.js'
import Messages from './screens/Messages'
import Contact from './screens/Contact'
import Animated from 'react-native-reanimated';

// create stack for sceens
// add header button

const DrawerContent = (props) => {
    //bug

    return(
        <DrawerContentScrollView {...props} >
            {/* <DrawerItemList {...props} /> */}
            <Block>
            <Block flex={0.4} margin={20} bottom>
                <Image source={{ url:'https://react-ui-kit.com/assets/img/react-ui-kit-logo-green.png', height:60, width:60}}
                resizeMode="center"
                style={{ borderRadius:30 }}
                />

                <Text title marginTop="2x">Drawer UI</Text>
                <Text size={9} marginTop>Ishan Lakhwani</Text>

            </Block>
            <Block>
            <DrawerItem
                label="Dashboard"
                labelStyle={{ marginLeft: -16 }}
                onPress={() => props.navigation.navigate("Dashboard")}
                icon={() => <AntDesign name="dashboard" size={16}/> }
            />
            <DrawerItem
                label="Messages"
                labelStyle={{ marginLeft: -16 }}
                onPress={() => props.navigation.navigate("Messages")}
                icon={() => <AntDesign name="message1" size={16}/> }

            />
            <DrawerItem
                label="Contact"
                labelStyle={{ marginLeft: -16 }}
                onPress={() => props.navigation.navigate("Contact")}
                icon={() => <AntDesign name="phone" size={16}/> }

            />
            </Block>
            </Block>
        </DrawerContentScrollView>
    )
}



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({navigation, style}) =>{
    return(
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
    <Stack.Navigator
        screenOptions={{
            headerTransparent:true,
            headerTitle:null,
            headerLeft:() => (
                <Button transparent padding marginHorizontal onPress={() => navigation.openDrawer()}>
                    <Feather name="menu" white size={18}/>
                </Button>
            )
        }}
    >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
    </Animated.View>
    )}

// build custom drawer

export default () => {
    const [progress, setProgress] = React.useState(new Animated.Value(0));
    const scale = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [1, 0.8],
    });
    const borderRadius = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [0, 16],
    });

    const animatedStyle = { borderRadius, transform: [{ scale }] };
    return (
    <LinearGradient style={{flex:1}} colors={["#B2FEFA","#0ED2F7"]}>
    <Drawer.Navigator 
    //drawer -> screen animat should be slide
    drawerType='slide'
    overlayColor="transparent"
    initialRouteName="Dashboard" 
    drawerStyle={{width:'40%', backgroundColor:'transparent'}}
    
    contentContainerStyle={{flex:1}}
    drawerContentOptions={{
        activeBackgroundColor: "#e0e5ec",
        activeTintColor:"green",
        inactiveTintColor:"green"
    }}
    sceneContainerStyle={{backgroundColor:'transparent'}}
    drawerContent={props => 
    { setProgress(props.progress)
    return <DrawerContent {...props} />}}
    >
            <Drawer.Screen name="Screens">
                {props => <Screens {...props} style={animatedStyle}/>}
            </Drawer.Screen>
        </Drawer.Navigator>
        </LinearGradient>
    );
};


const styles = StyleSheet.create({
    stack: {
      flex: 1,
      shadowColor: '#FFF',
      overflow:"hidden",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 5,
      // overflow: 'scroll',
      // borderWidth: 1,
    },
    drawerStyles: { flex: 1, width: '50%', backgroundColor: '#e0e5ec' },
    drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
    drawerLabel: { color: 'white', marginLeft: -16 },
    avatar: {
      borderRadius: 60,
      marginBottom: 16,
      borderColor: 'white',
      borderWidth: StyleSheet.hairlineWidth,
    },
  });