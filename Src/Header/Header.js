
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import React from 'react';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Icons from 'react-native-vector-icons/Entypo';
// import Iconss from 'react-native-vector-icons/EvilIcons';


// const Header = () => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.item}>
//                 <TouchableOpacity style={styles.discover}>
//                     <Icon name="left" size={15} color="#0A90F6" />
//                     <Text style={styles.text}>Discover</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style={[styles.item, styles.centerItem]}>
//                 <TouchableOpacity>
//                     <Text style={styles.text}>My Feed</Text>
//                 </TouchableOpacity>
//             </View>
//             <View>
//                 <TouchableOpacity>
//                     <Iconss name="chevron-left" size={20} color="#0A90F6" />
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row', // This makes the items align horizontally in a row
//         alignItems: 'center', // This aligns the items vertically in the center
//         padding: 20,
//         backgroundColor: '#FFFFFF',
//     },
//     item: {
//         flex: 1,
//     },
//     centerItem: {
//         justifyContent: 'center', // This centers the content vertically
//     },
//     text: {
//         marginLeft: 5,
//     },
//     discover: {
//         flexDirection: 'row', // This makes the Icon and Text align horizontally in a row
//         alignItems: 'center', // This aligns the items vertically in the center
//     },
// });

// export default Header;




// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import React, { useState } from 'react';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Icons from 'react-native-vector-icons/Entypo';
// import Iconss from 'react-native-vector-icons/EvilIcons';
// import {navigation} from '@react-navigation/native'

// const Header = () => {
//     const [iconName, setIconName] = useState("align-top");
//     const [discoverCom,setDiscoverCom] = useState(false);    

//     const handleIconPress = () => {
//         if (iconName === "align-top") {
//             setIconName("redo");
//         } else {
//             // setIconName("align-top");
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.item}>
//                 <TouchableOpacity style={styles.discover} onPress={() => navigation.navigate("Discover")} >
//                     <Icon name="left" size={15} color="#0A90F6" />
//                     <Text style={styles.text}>Discover</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style={[styles.item, styles.centerItem]}>
//                 <TouchableOpacity style={styles.MyFeed}>
//                     <Text style={styles.text}>My Feed</Text>
//                 </TouchableOpacity>
//             </View>
//             <View>
//                 <TouchableOpacity onPress={handleIconPress}>
//                     {iconName === "align-top" ? (
//                         <Icons name="align-top" size={20} color="#0A90F6" />
//                     ) : (
//                         <Iconss name="redo" size={20} color="#0A90F6" />
//                     )}
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row', // This makes the items align horizontally in a row
//         alignItems: 'center', // This aligns the items vertically in the center
//         padding: 20,
//         backgroundColor: '#FFFFFF',
//         // flex: 1,

//     },
//     item: {
//         flex: 1,
//         // width:160
//     },
//     centerItem: {
//         justifyContent: 'center', // This centers the content vertically
//     },
//     text: {
//         marginLeft: 5,
//         color:'black'
//     },
//     discover: {
//         flexDirection: 'row', // This makes the Icon and Text align horizontally in a row
//         alignItems: 'center', // This aligns the items vertically in the center
//         width:60
//     },
//     MyFeed : {
//         width:60
//     }
// });

// export default Header;



import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';
import Iconss from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
// import Icon from 'react-native-vector-icons/AntDesign';


const Header = ({ showLanguageButtons, selectedLanguage, toggleLanguageButtons }) => {
    const navigation = useNavigation(); // Get the navigation object

    const handleSettingIconClick = () => {
        toggleLanguageButtons(!showLanguageButtons);
    };

    const [iconName, setIconName] = useState("align-top");
    const [discoverCom, setDiscoverCom] = useState(false);

    const handleIconPress = () => {
        if (iconName === "align-top") {
            setIconName("redo");
        } else {
            setIconName("align-top");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <TouchableOpacity style={styles.discover} onPress={() => navigation.navigate("Discover")}>
                    <Icon name="left" size={15} color="#0A90F6" />
                    <Text style={styles.text}>Discover</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.item, styles.centerItem]}>
                <TouchableOpacity style={styles.MyFeed}>
                    <Text style={styles.text}>My Feed</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={handleIconPress}>
                   <View style={styles.iconContainer}>
                   {iconName === "align-top" ? (
                        <Icons name="align-top" size={20} color="#0A90F6" />
                    ) : (
                        <Iconss name="redo" size={20} color="#0A90F6"  />
                    )}
                   </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.settingIcon}
                    onPress={handleSettingIconClick}
                >
                    {/* <Icon name="setting" size={20} color='#0A90F6' /> */}
                    <Text style={{color:'black',fontWeight:"bold",  fontSize:12}}>lang:-{selectedLanguage}</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        // padding: 18,
        padding: 25,
        backgroundColor: '#ffffff',
        borderColor:'lightgray',
        borderBottomWidth:1,
        // borderBottomLeftRadius:10,
        borderBottomColor: 'red',
        elevation:5,
        borderBottomEndRadius: 25, 
        borderBottomLeftRadius: 25, 
        borderBottomRightRadius: 25, 
        borderBottomStartRadius: 25,
        
        
    },
    item: {
        flex: 1,
    },
    centerItem: {
        justifyContent: 'center',
    },
    text: {
        marginLeft: 5,
        color: 'black',
        fontWeight:'bold',
        fontSize:12
    },
    discover: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 65,
        alignItems:"center"
    },
    MyFeed: {
        width: 60
    },
    iconContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        position:'relative',
        right:30
      },
      
    // settingIcon: {
    //     backgroundColor: '#0A90F6', // Background color
    //     paddingHorizontal: 15, // Horizontal padding
    //     paddingVertical: 10,   // Vertical padding
    //     borderRadius: 8,       // Border radius
    //     flexDirection: 'row',  // Align text horizontally
    //     alignItems: 'center',  // Align text vertically
    //   },
    //   settingText: {
    //     color: 'white',        // Text color
    //     fontSize: 16,          // Text size
    //     marginLeft: 5,         // Space between icon and text
    //   }
});

export default Header;



