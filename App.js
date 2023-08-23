// // import { View, Text } from 'react-native'
// // import React from 'react'
// // import Header from './Src/Header/Header'
// // import Footer from './Src/Footer/Footer'

// // const App = () => {
// //   return (
// //     <View>
// //       <Header />
// //       <Footer />
// //     </View>
// //   )
// // }

// // export default App



// // import { View, Text, StyleSheet } from 'react-native';
// // import React,{useState} from 'react';
// // import Header from './Src/Header/Header';
// // import Footer from './Src/Footer/Footer';
// // import { ListOfData } from './Src/ListOfData/ListOfData';

// // const App = () => {
// //   const [showHeaderFooter, setShowHeaderFooter] = useState(false); // State to control Header and Footer visibility


  
// //   const handleContentClick = () => {
// //     setShowHeaderFooter(!showHeaderFooter);
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {/* <Header /> */}
// //             {/* ... (Other components) */}
// //             {showHeaderFooter && (
// //               <View style={styles.headerFooter}>
// //                  <Header />
// //               </View>
      
// //       )}
// //       {/* Use flex: 1 to let the main container View expand */}
// //       <View style={{ flex: 1 }}>
// //         {/* Your main content here */}
// //         <ListOfData onContentClick={handleContentClick}/>
// //       </View>
// //       {/* <Footer /> */}

// //         {/* ... (Other components) */}
// //         {showHeaderFooter && (
// //          <View style={styles.headerFooter}>
// //             <Footer />
// //          </View>
        
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: 'stretch', // This ensures children take up the full width
// //   },
// //   headerFooter: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     zIndex: 2, // Ensure Header and Footer overlap content
// //   },
// // });

// // export default App;


import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Header from './Src/Header/Header';
import Footer from './Src/Footer/Footer';
import { ListOfData } from './Src/ListOfData/ListOfData';
import NavigationScreen from './Src/NavigationScreen/NavigationScreen';

const App = () => {
  // const [showHeaderFooter, setShowHeaderFooter] = useState(false); // State to control Header and Footer visibility

  // const handleContentClick = () => {
  //   setShowHeaderFooter(!showHeaderFooter);
  // };

  return (
    <View style={styles.container}>
      {/* {showHeaderFooter && <Header />} */}
      <View style={{ flex: 1 }}>
        {/* <ListOfData /> */}
        <NavigationScreen />
      </View>
      {/* {showHeaderFooter && <Footer />} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
});

export default App;


// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import Options from './Options'; // Import the Options component
// import ListOfData from './ListOfData'; // Import the ListOfData component

// const App = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState('hi'); // Default language

//   // Define the handleLanguageSelection function
//   const handleLanguageSelection = (newLanguage) => {
//     setSelectedLanguage(newLanguage);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Pass handleLanguageSelection as a prop to Options */}
//       <Options handleLanguageSelection={handleLanguageSelection} />

//       {/* Pass handleLanguageSelection as a prop to ListOfData */}
//       <ListOfData
//         handleLanguageSelection={handleLanguageSelection}
//         selectedLanguage={selectedLanguage} // Optionally, you can also pass the selected language
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
// });

// export default App;

