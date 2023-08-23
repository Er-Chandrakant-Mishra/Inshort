
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Modal, TouchableWithoutFeedback, Image, Dimensions, ActivityIndicator, ScrollView } from 'react-native';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import WebView from 'react-native-webview';


const ListOfData = ({ navigation }) => {
  const [showHeaderFooter, setShowHeaderFooter] = useState(false);
  const [showLanguageButtons, setShowLanguageButtons] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('hindi');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDescriptionScrollable, setIsDescriptionScrollable] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);


  const languages = [
    { label: 'Hindi', code: 'hindi', url: 'https://prod.api.etvbharat.com/catalog_lists/5b4f67462db2261f4d000a36?auth_token=J5YzsHgs74NjsqwjdUyY&response=r2&item_languages=hi&portal_state=dl&pagination_url=/hindi/delhi/bharat&page=0&page_size=43&client=dailyhunt' },
    { label: 'Marathi', code: 'marathi', url: 'https://prod.api.etvbharat.com/catalog_lists/5b4fff182db2266b78000a36?auth_token=J5YzsHgs74NjsqwjdUyY&response=r2&item_languages=mr&portal_state=mh&pagination_url=/marathi/maharashtra/bharat&page=0&page_size=43&client=dailyhunt' },
    { label: 'Bangla', code: 'bangla', url: 'https://prod.api.etvbharat.com/catalog_lists/5b4f80d52db2262cef000a36?auth_token=J5YzsHgs74NjsqwjdUyY&response=r2&item_languages=bn&portal_state=wb&pagination_url=/bengali/west-bengal/bharat&page=0&page_size=43&client=dailyhunt' }
  ];





  const handleContentClick = () => {
    setShowHeaderFooter(!showHeaderFooter);
    if (showHeaderFooter == true) {
      setShowLanguageButtons(false);
      handleCloseMenu();

    }
  };



  const toggleLanguageButtons = (visible) => {
    setShowLanguageButtons(visible);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(languages.find(lang => lang.code === selectedLanguage).url)
      .then((response) => response.json())
      .then((jsondata) => {
        if (jsondata && jsondata.data && jsondata.data.catalog_list_items) {
          setItems(jsondata.data.catalog_list_items);
        } else {
          console.error('Invalid data structure:', jsondata);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoading(false); // Stop loading indicator
      });

  }, [selectedLanguage]);

  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
    setShowLanguageButtons(false);
  };


  const handleCloseMenu = () => {
    setShowLanguageButtons(false)
  };


  const renderItem = ({ item }) => {


    const imageUrl = item.thumbnails.small_16_9.url;
    const video_tag = item.ad_conf_video.video_tag;
    const carousel_tag = item.ad_conf_video.carousel_tag;


    return (
      <View style={styles.fullScreenContainer}>
        <View style={styles.fullScreenItem} >
          <Image
            source={{ uri: imageUrl }}
            style={[styles.thumbnail, { height: 250 }]}
            onError={(error) => {
              console.log("Error loading image:", imageUrl, error.nativeEvent.error);
            }}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <Text style={styles.description} onPress={() => handleContentClick(item)}>{item.short_description}
                  <Text style={{ color: 'blue', marginLeft: -100, position: 'relative', bottom: -160, left: -260, width: 100, height: 50 }} onPress={() => navigation.navigate("NewsDetails", { item })} >... read more</Text>
                  </Text>
            </View>
          </View>
          <TouchableWithoutFeedback onPress={() => handleContentClick(item)}>
            <View style={{ width: "100%", height: 220, backgroundColor: 'rgba(255, 255, 255, 0.5)', position: 'relative', bottom: -119 }} />
          </TouchableWithoutFeedback>
        </View>
      
      </View>
    );
  };
  const itemHeight = Dimensions.get('window').height - 20; // Adjusted item height
  const snapInterval = -(itemHeight + 10); // Use negative value for sliding effect


  return (
    <View style={styles.container}>
      {
        showLanguageButtons && (
          <Modal transparent={true} visible={true} >


            <TouchableWithoutFeedback onPress={() => setShowLanguageButtons(false)}>
              <View style={styles.transparent} />
            </TouchableWithoutFeedback>
            <View style={styles.languageButtonsContainer}>
              <View style={styles.languageButtons}>


                <TouchableOpacity
                  onPress={() => handleLanguageChange('hindi')}
                >
                  <Text style={[styles.languageButtonText]}>Hindi</Text>
                </TouchableOpacity>
                <View style={{ width: 400, height: 1, backgroundColor: 'gray' }} />

                <TouchableOpacity
                  onPress={() => handleLanguageChange('marathi')}
                >
                  <Text style={styles.languageButtonText}>Marathi</Text>
                </TouchableOpacity>
                <View style={{ width: 400, height: 1, backgroundColor: 'gray' }} />
                <TouchableOpacity
                  onPress={() => handleLanguageChange('bangla')}
                >
                  <Text style={styles.languageButtonText}>Bangala</Text>
                </TouchableOpacity>

              </View>
            </View>

          </Modal>
        )
      }


      {/* Loading indicator */}
      {isLoading && (
        <ActivityIndicator
          style={styles.loadingIndicator}
          size="large"
          color="red"
        />
      )}

      {items && items.length > 0 && (
        <FlatList
          data={items}
          keyExtractor={(item, index) => `${item.news_id}_${index}`}
          renderItem={renderItem}
          horizontal={false}
          pagingEnabled
          snapToAlignment="start"
          snapToInterval={snapInterval}
          decelerationRate="fast"
          contentContainerStyle={styles.listContainer}
        />
      )}

      {showHeaderFooter && (
        <View style={styles.overlay}>
          <Header showLanguageButtons={showLanguageButtons}
            toggleLanguageButtons={toggleLanguageButtons}
            selectedLanguage={selectedLanguage}
          />
        </View>
      )}
      {showHeaderFooter && (
        <View style={styles.overlayFooter}>
          <Footer />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  fullScreenContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  fullScreenItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageButtonsContainer: {
    flex: 1,
    alignItems: 'center', // Center align the buttons horizontally
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 100,
    width: '100%'


  },
  languageButtons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },

  languageButtonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
    margin: 4,
    padding: 5
  },
  transparent: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  itemContainer: {
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  titleContainer: {
    padding: 5,
    position: 'relative',
    bottom: -90
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: 'black',
    bottom: -26
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  overlayFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  thumbnail: {
    width: "100%", // Width of the image is 100% of the container
    resizeMode: "cover", // Cover mode to fit and crop the image
    position: 'absolute',
    top: 0
  },
  listContainer: {
    flexGrow: 1, // Use flexGrow instead of flex for proper scrolling behavior
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 16 / 9, // Maintain 16:9 aspect ratio for the container
    width: "100%",
    backgroundColor: "lightgray", // Blue background as you mentione
  },
  newsButton: {
    backgroundColor: '#5c4f4e',
    position: 'absolute',
  },
  loadingIndicator: {
    position: 'absolute',
    top: 300,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollableDescription: {
    maxHeight: 150,
    fontSize: 12,
  },


});

export default ListOfData;
