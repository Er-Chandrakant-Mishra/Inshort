// import { View, Text, StyleSheet } from 'react-native';
// import React, { useState } from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const Options = () => {
//     const [selectOptions, setSelectedOptions] = useState(false);

//     const handleSelectLanguage = () => {
//         setSelectedOptions(!selectOptions);
//     }

//     const handleLanguageSelection = (newLanguage) => {
//         setSelectedOptions(false);
//         // Perform any additional logic for language selection here

//         console.log("Selected language:", newLanguage);
//     }

//     return (
//         <View>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                 <View style={styles.language}>
//                     <Icon name="text-outline" size={18} style={{ paddingRight: 10 }} />
//                     <Text style={{ paddingLeft: 10 }}>Language</Text>
//                 </View>
//                 <TouchableOpacity style={styles.selectLanguage} onPress={handleSelectLanguage}>
//                     <Text>Select language</Text>
//                 </TouchableOpacity>
//             </View>

//             {
//                 selectOptions && (
//                     <View style={styles.listOfLanguage}>
//                         <TouchableOpacity onPress={handleLanguageSelection('hi')}>
//                             <Text>Hindi</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity onPress={handleLanguageSelection('mr')}>
//                             <Text>Marathi</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity onPress={handleLanguageSelection('bn')}>
//                             <Text>Bangala</Text>
//                         </TouchableOpacity>
//                     </View>
//                 )
//             }
//         </View>
//     );
// }

// export default Options;

// const styles = StyleSheet.create({
//     language: {
//         flexDirection: 'row',
//         padding: 10,
//         paddingTop: 10
//     },
//     selectLanguage: {
//         padding: 12
//     },
//     listOfLanguage: {
//         marginTop: 10,
//         borderTopWidth: 1,
//         borderColor: '#ccc',
//         paddingTop: 10,
//     }
// });







// import { View, Text, StyleSheet } from 'react-native';
// import React, { useState } from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const Options = ({ onSelectLanguage }) => {
//     const [selectOptions, setSelectedOptions] = useState(false);

//     const handleSelectLanguage = () => {
//         setSelectedOptions(!selectOptions);
//     }

//     const handleLanguageSelection = (newLanguage) => {
//         setSelectedOptions(false);
//         // Perform any additional logic for language selection here

//         console.log("Selected language:", newLanguage);
//         // onSelectLanguage(newLanguage); // Pass the selected language to the parent component
//         return newLanguage;
//     }

//     return (
//         <View>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                 <View style={styles.language}>
//                     <Icon name="text-outline" size={18} style={{ paddingRight: 10 }} />
//                     <Text style={{ paddingLeft: 10 }}>Language</Text>
//                 </View>
//                 <TouchableOpacity style={styles.selectLanguage} onPress={handleSelectLanguage}>
//                     <Text>Select language</Text>
//                 </TouchableOpacity>
//             </View>

//             {selectOptions && (
//                 <View style={styles.listOfLanguage}>
//                     <TouchableOpacity onPress={() => handleLanguageSelection('hi')}>
//                         <Text>Hindi</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => handleLanguageSelection('mr')}>
//                         <Text>Marathi</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => handleLanguageSelection('bn')}>
//                         <Text>Bangala</Text>
//                     </TouchableOpacity>
//                 </View>
//             )}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     language: {
//         flexDirection: 'row',
//         padding: 10,
//         paddingTop: 10
//     },
//     selectLanguage: {
//         padding: 12
//     },
//     listOfLanguage: {
//         marginTop: 10,
//         borderTopWidth: 1,
//         borderColor: '#ccc',
//         paddingTop: 10,
//     }
// });

// // export default Options;
// import { View, Text, StyleSheet } from 'react-native';
// import React, { useState } from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const Options = (props) => {
//     const [selectOptions, setSelectedOptions] = useState(false);
//     const [selectedLanguagedata, setSelectedLanguagedata] = useState('hi');

//     const handleSelectLanguage = () => {
//         setSelectedOptions(!selectOptions);
//     }

//     const handleLanguageSelection = (language) => {
//         setSelectedOptions(false);
//         setSelectedLanguagedata(language);
//     }

//     console.log("selectedLanguage================>", selectedLanguagedata);

//     return (
//         <View>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                 <View style={styles.language}>
//                     <Icon name="text-outline" size={18} style={{ paddingRight: 10 }} />
//                     <Text style={{ paddingLeft: 10 }}>Language</Text>
//                 </View>
//                 <TouchableOpacity style={styles.selectLanguage} onPress={handleSelectLanguage}>
//                     <Text>Select language</Text>
//                 </TouchableOpacity>
//             </View>

//             {selectOptions && (
//                 <View style={styles.listOfLanguage}>
//                     <TouchableOpacity onPress={() => handleLanguageSelection('hi')}>
//                         <Text>Hindi</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => handleLanguageSelection('mr')}>
//                         <Text>Marathi</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => handleLanguageSelection('bn')}>
//                         <Text>Bangla</Text>
//                     </TouchableOpacity>
//                 </View>
//             )}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     language: {
//         flexDirection: 'row',
//         padding: 10,
//         paddingTop: 10
//     },
//     selectLanguage: {
//         padding: 12
//     },
//     listOfLanguage: {
//         marginTop: 10,
//         borderTopWidth: 1,
//         borderColor: '#ccc',
//         paddingTop: 10,
//     }
// });

// export default Options;





// export default Options;
import { View, Text, StyleSheet,Button } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ListOfData from '../ListOfData/ListOfData';








const Options = (props) => {



    const languages = [
        { label: 'Hindi', code: 'hi' },
        { label: 'Marathi', code: 'mr' },
        { label: 'Bangla', code: 'bn' }
      ];

    const [selectOptions, setSelectedOptions] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('hi');;
    const [currentLanguage, setCurrentLanguage] = useState(languages[0].code);

    const handleSelectLanguage = () => {
        setSelectedOptions(!selectOptions);
    }

    const handleLanguageSelection = (language) => {
        setSelectedOptions(false);
        setSelectedLanguagedata(language);
    }

    // console.log("selectedLanguage================>", selectedLanguagedata);
//----------------------------------------------------------------------//



const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
  };





  return (
    <View style={styles.container}>
      <View style={styles.languageButtons}>
        {languages.map((language) => (
          <Button
            key={language.code}
            title={language.label}
            onPress={() => handleLanguageChange(language.code)}
          />
        ))}
      </View>
      {/* <ListOfData selectedLanguage={selectedLanguage} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
    language: {
        flexDirection: 'row',
        padding: 10,
        paddingTop: 10
    },
    selectLanguage: {
        padding: 12
    },
    listOfLanguage: {
        marginTop: 10,
        borderTopWidth: 1,
        borderColor: '#ccc',
        paddingTop: 10,
    }
});

export default Options;
