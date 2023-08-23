// import { View, Text, TouchableOpacity } from 'react-native'
// import React from 'react'
// import Icons from 'react-native-vector-icons/Entypo';
// import Iconss from 'react-native-vector-icons/AntDesign'
// import Iconsss from 'react-native-vector-icons/Feather'



// const Footer = () => {
//     return (
//         <View>
//             <View>
//                 <TouchableOpacity>
//                     <Icons name="circle" size={20} color="green" />
//                     <Text>Relevancy</Text>
//                 </TouchableOpacity>
//             </View>
//             <View>
//                 <TouchableOpacity>
//                     <Iconss name="sharealt" size={20}    />
//                     <Text>Share</Text>
//                 </TouchableOpacity>
//             </View>
//             <View>
//                 <TouchableOpacity>
//                     <Iconsss name="bookmark" size={20} />
//                     <Text>Bookmark</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }

// export default Footer;





import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Entypo';
import Iconss from 'react-native-vector-icons/AntDesign';
import Iconsss from 'react-native-vector-icons/Feather';

const Footer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer}>
                <View style={styles.circle}>
                    {/* <Icons name="circle" size={20} color="white" /> */}
                </View>
                <Text style={styles.text}>Relevancy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
                <View>
                    <Iconss name="sharealt" size={18} color="#0A90F6" />
                </View>
                <Text style={styles.text}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
                <View>
                    <Iconsss name="bookmark" size={18} color="#0A90F6" />
                </View>
                <Text style={styles.text}>Bookmark</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems:'center',
        // padding:20,
        // height:55,
        height:80,

        backgroundColor:"white",
        borderTopWidth:1,
        // borderBottomLeftRadius:10,
        // borderTopColor: 'red',
        borderTopColor:'lightgray',
        elevation:5,
        borderTopEndRadius: 25, 
        borderTopLeftRadius: 25, 
        borderTopRightRadius: 25, 
        borderTopStartRadius: 25,
    },
    iconContainer: {
        alignItems: 'center',
    },
    circle: {
        backgroundColor: '#5efc03',
        width: 20,
        height: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 5,
        fontSize:11,
        color:'black',
        fontWeight:'bold'
    },
});

export default Footer;

