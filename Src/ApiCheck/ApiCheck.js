// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, Button } from 'react-native';

// const App = () => {
//   const [language, setLanguage] = useState('hi'); // Default language: Hindi
//   const [data, setData] = useState([]);
// // console.log("data=",data)
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchCatalogData = async (apiUrl) => {
//     try {
//       const response = await fetch(apiUrl);
//       const jsonData = await response.json();
//       setData(jsonData.data.catalog_list_items);
//       setIsLoading(false);
//       // console.log('jsonData.data=', jsonData.data.catalog_list_items)
//     } catch (err) {
//       setError(err);
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     const apiUrls = {
//       hi: 'https://prod.api.etvbharat.com/catalog_lists/5b4f67462db2261f4d000a36?auth_token=J5YzsHgs74NjsqwjdUyY&response=r2&item_languages=hi&portal_state=dl&pagination_url=/hindi/delhi/bharat&page=0&page_size=43&client=dailyhunt',
//       mr: 'https://prod.api.etvbharat.com/catalog_lists/5b4fff182db2266b78000a36?auth_token=J5YzsHgs74NjsqwjdUyY&response=r2&item_languages=mr&portal_state=mh&pagination_url=/marathi/maharashtra/bharat&page=0&page_size=43&client=dailyhunt',
//       bn: 'https://prod.api.etvbharat.com/catalog_lists/5b4f80d52db2262cef000a36?auth_token=J5YzsHgs74NjsqwjdUyY&response=r2&item_languages=bn&portal_state=wb&pagination_url=/bengali/west-bengal/bharat&page=0&page_size=43&client=dailyhunt'
//     };

//     fetchCatalogData(apiUrls[language]);
//   }, [language]);

//   const handleLanguageChange = (newLanguage) => {
//     setLanguage(newLanguage);
//     setIsLoading(true);
//   };

//   if (isLoading) {
//     return <Text>Loading...</Text>;
//   }

//   if (error) {
//     return <Text>Error: {error.message}</Text>;
//   }

// const RenderItemdata =React.useCallback((item,index) =>{
//   <>
//     <Text>{item.title}</Text>
//   </>
// })



//   return (
//     <View>
//       <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
//         <Button title="Hindi" onPress={() => handleLanguageChange('hi')} />
//         <Button title="Marathi" onPress={() => handleLanguageChange('mr')} />
//         <Button title="Bangla" onPress={() => handleLanguageChange('bn')} />
//       </View>
//       <FlatList
//         data={data}
//         keyExtractor={(item, index) => index.toString()} // Use index as the key
//         renderItem={RenderItemdata}
//         // renderItem={({ item }) => (

//         //   <View>
//         //     <Text>{item.title}</Text>
//         //     {/* Render other item details here */}
//         //   </View>
//         // )}
//       />

//     </View>
//   );
// };

// export default App;





import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import WebView from 'react-native-webview';


const App = () => {
  const [language, setLanguage] = useState('hi'); // Default language: Hindi
  const [data, setData] = useState([]);
  // console.log("data=",data)
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // const fetchCatalogData = async (apiUrl) => {
  //   try {
  //     const response = await fetch(apiUrl);
  //     const jsonData = await response.json();
  //     setData(jsonData.data.catalog_list_items);
  //     setIsLoading(false);
  //     // console.log('jsonData.data=', jsonData.data.catalog_list_items)
  //   } catch (err) {
  //     setError(err);
  //     setIsLoading(false);
  //   }
  // };


  
  const fetchCatalogData = async (apiUrl) => {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      if (jsonData.data && jsonData.data.catalog_list_items) {
        setData(jsonData.data.catalog_list_items);
      }
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const apiUrls = {
      hi: 'https://prod.api.etvbharat.com/catalog_lists/5b4f67462db2261f4d000a36?auth_token=J5YzsHgs74NjsqwjdUyY&response=r2&item_languages=hi&portal_state=dl&pagination_url=/hindi/delhi/bharat&page=0&page_size=43&client=dailyhunt',
      mr: 'https://prod.api.etvbharat.com/catalog_lists/5b4fff182db2266b78000a36?auth_token=J5YzsHgs74NjsqwjdUyY&response=r2&item_languages=mr&portal_state=mh&pagination_url=/marathi/maharashtra/bharat&page=0&page_size=43&client=dailyhunt',
      bn: 'https://prod.api.etvbharat.com/catalog_lists/5b4f80d52db2262cef000a36?auth_token=J5YzsHgs74NjsqwjdUyY&response=r2&item_languages=bn&portal_state=wb&pagination_url=/bengali/west-bengal/bharat&page=0&page_size=43&client=dailyhunt'
    };

    fetchCatalogData(apiUrls[language]);
  }, [language]);

  const handleLanguageChange = (newLanguage) => {
    if (newLanguage !== language) {
      setLanguage(newLanguage);
      setIsLoading(true);
    } else {
      // setLanguage(language);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const RenderItemdata = (({ item, index }) => {
    const video_tag = item.ad_conf_video?.video_tag;
    const carousel_tag = item.ad_conf_video.carousel_tag;
    // console.log('item==>', item.title);
    console.log('item=======>', video_tag);

    if (!video_tag) {
      return null;
    }
    return (
      <>
        <Text>{item.title}</Text>
        <WebView
         rautomaticallyAdjustContentInsets={false}
         onLoad={console.log("Loaded")}
         startInLoadingState={true}
         javaScriptEnabled={true}
        source={{ html: carousel_tag,
          headers: { 'key': 'value' }
         }}
        style={{ height: 300,color:'red',flex:1 }} // Set the desired height
      />
      </>
    )
  })



  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button title="Hindi" onPress={() => handleLanguageChange('hi')} />
        <Button title="Marathi" onPress={() => handleLanguageChange('mr')} />
        <Button title="Bangla" onPress={() => handleLanguageChange('bn')} />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()} // Use index as the key
        renderItem={RenderItemdata}
      />

    </View>
  );
};

export default App;

