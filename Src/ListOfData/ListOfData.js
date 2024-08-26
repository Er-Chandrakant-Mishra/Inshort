import React, {useState, useEffect, useRef, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  PanResponder,
  ActivityIndicator,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Iconss from 'react-native-vector-icons/MaterialIcons';
import getFcmToken from '../getFcmToken/getFcmToken';
import PushNotification from '../push_notification/push_notification';
import {useFocusEffect, useTheme} from '@react-navigation/native';
import More_model from '../more_model/More_model';
import { useSelector } from 'react-redux';
import { DARK_BG_COLOR, LIGHT_BG_COLOR ,LIGHT_TEXT_COLOR,DARK_TEXT_COLOR} from '../redux/utils/Colors';




const ListOfData = ({navigation}) => {
  // State management using hooks
  const [showHeaderFooter, setShowHeaderFooter] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('telugu');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [readMoreClick, setReadMoreClick] = useState(false);
  const [page, setPage] = useState(0); // Add page state
  const [isFetchingMore, setIsFetchingMore] = useState(false); // State to check if more data is being fetched
  const [valueOfMoreModelOfFooter, setValueOfMoreModelOfFooter] =
    useState(true);
  const [isMoreModalVisible, setIsMoreModalVisible] = useState(false); // New state for modal visibility
  // const { theme } = useTheme();
  // const isDarkMode = theme === 'dark';

  const THEME = useSelector(state => state.theme);
  const LANGUAGE = useSelector(state => state.language)

  console.log('LANGUAGE:-',LANGUAGE)

  const swipeAnimation = useRef(new Animated.Value(0)).current;
  const nextSwipeAnimation = useRef(
    new Animated.Value(Dimensions.get('window').height),
  ).current;
  const prevSwipeAnimation = useRef(
    new Animated.Value(-Dimensions.get('window').height),
  ).current;

  // Ref for managing timeout
  const timeoutRef = useRef(null);

  const languages = useMemo(
    () => [
      {
        label: 'Telugu',
        code: 'telugu',
        url: 'http://172.17.15.218/hello/Welcome/get_noti_lang_wise_data?lang_id=2',
      },
      {
        label: 'Letest_news',
        code: 'letest_news',
        url: 'http://172.17.15.218/hello/Welcome/get_current_affairs_lang_wise?lang_id=2',
      },
      {
        label: 'English',
        code: 'english',
        url: 'http://172.17.15.218/hello/Welcome/get_noti_lang_wise_data?lang_id=1',
      },
    ],
    [page],
  );

  useEffect(() => {
    PushNotification();

    // console.log('token:-',token)
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          languages.find(lang => lang.code === selectedLanguage).url,
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsondata = await response.json();
        if (jsondata && jsondata.data) {
          setItems(jsondata.data);
          setCurrentIndex(0);
        } else {
          console.log('Invalid data structure:', jsondata);
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        setIsLoading(false);
        setIsFetchingMore(false);
      }
    };

    fetchData();
  }, [selectedLanguage, languages, page]);

  // Handle language change
  const handleLanguageChange = useCallback(languageCode => {
    setSelectedLanguage(languageCode);
  }, []);

  const handleModalVisible = useCallback(modalVisible => {
    setIsMoreModalVisible(modalVisible); // Update visibility state
  }, []);

  // Swipe up handling with infinite scroll
  const onSwipeUp = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);

      const nextIndex = currentIndex + 1;
      const resetIndex = nextIndex >= items.length ? 0 : nextIndex;

      Animated.parallel([
        Animated.timing(swipeAnimation, {
          toValue: -Dimensions.get('window').height,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(nextSwipeAnimation, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setCurrentIndex(resetIndex);
        swipeAnimation.setValue(0);
        nextSwipeAnimation.setValue(Dimensions.get('window').height);
        setIsAnimating(false);
      });
    }
  }, [
    currentIndex,
    isAnimating,
    items.length,
    swipeAnimation,
    nextSwipeAnimation,
  ]);

  // Swipe down handling with infinite scroll
  const onSwipeDown = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);

      const prevIndex = currentIndex - 1;
      const resetIndex = prevIndex < 0 ? items.length - 1 : prevIndex;

      Animated.parallel([
        Animated.timing(swipeAnimation, {
          toValue: Dimensions.get('window').height,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(prevSwipeAnimation, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setCurrentIndex(resetIndex);
        swipeAnimation.setValue(0);
        prevSwipeAnimation.setValue(-Dimensions.get('window').height);
        setIsAnimating(false);
      });
    }
  }, [
    currentIndex,
    isAnimating,
    items.length,
    swipeAnimation,
    prevSwipeAnimation,
  ]);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gestureState) => {
          const {dy} = gestureState;
          if (dy < -50 && !isAnimating) {
            onSwipeUp();
          } else if (dy > 50 && !isAnimating) {
            onSwipeDown();
          }
        },
        onPanResponderRelease: (e, gestureState) => {
          const {dx, dy} = gestureState;
          if (dx === 0 && dy === 0) {
            handleContentPress();
          }
        },
        onPanResponderGrant: (e, gestureState) => {
          // Optional: can be used for initial touch logic if needed
        },
      }),
    [isAnimating, onSwipeDown, onSwipeUp],
  );

  // Animated style for swipe animation
  const animatedStyle = useMemo(
    () => ({
      transform: [{translateY: swipeAnimation}],
    }),
    [swipeAnimation],
  );

  const handleContentPress = useCallback(() => {
    // console.log('Content pressed');
    setShowHeaderFooter(prev => !prev);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setShowHeaderFooter(false);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [showHeaderFooter]);

  const handleReadMorePress = useCallback(() => {
    // setReadMoreClick(!readMoreClick);
    console.log('readmore button clicked');
    navigation.navigate('NewsDetails', {
      uri: items[currentIndex]?.dynamic_url,
    });
  }, [currentIndex, items, navigation]);

  useFocusEffect(
    useCallback(() => {
      // Reset the readMoreClick state when the screen is focused
      setReadMoreClick(false);
    }, []),
  );

  const image_url = 'https://pratibha.eenadu.net/images/thumbicon1.png';

  const stripHtmlTags = str => {
    try {
      if (typeof str !== 'string') {
        return '';
      }
      return str.replace(/<[^>]*>?/gm, '');
    } catch (error) {
      console.log('error in stripHtmlTags :-', error);
    }
  };

  const handleCancelModel = () => {
    setIsMoreModalVisible(false)
  }

  return (
    <TouchableWithoutFeedback onPress={handleContentPress}>
      <View style={styles.container}>
        {isLoading && page === 0 && (
          <ActivityIndicator
            style={styles.loadingIndicator}
            size="large"
            color="red"
          />
        )}
        {items && items.length > 0 && (
          <View style={[styles.content,
          // {backgroundColor:'red'}
          ]}>
            <View style={[styles.cardWrapper]}>
              <Animated.View
                style={[
                  styles.cardContainer,
                  animatedStyle,
                  {
                    zIndex: 1,
                    position: readMoreClick ? 'relative' : 'absolute',
                  },
                  {backgroundColor:THEME.data == 'light' ? LIGHT_BG_COLOR:DARK_BG_COLOR}
                ]}
                {...panResponder.panHandlers}>
                <TouchableWithoutFeedback onPress={handleContentPress}>
                 
                <View style={[styles.card, {backgroundColor:THEME.data == 'light' ? LIGHT_BG_COLOR:DARK_BG_COLOR}]}>
                    <Image
                      source={{
                        uri: image_url,
                      }}
                      style={styles.image}
                    />
                    <View style={{top: '-12%'}}>
                      <Text style={[styles.title ,{color:THEME.data == 'light' ? LIGHT_TEXT_COLOR:DARK_TEXT_COLOR}]}>
                        {selectedLanguage === 'letest_news'
                          ? stripHtmlTags(items[currentIndex].art_title_telugu)
                          : stripHtmlTags(
                              items[currentIndex].lt_notif_title_telugu,
                            )}
                      </Text>
                      <Text style={[styles.description , {color:THEME.data == 'light' ? LIGHT_TEXT_COLOR:DARK_TEXT_COLOR}]}>
                        {selectedLanguage === 'letest_news'
                          ? items[currentIndex].art_short_desc_telugu
                          : items[currentIndex].lt_notif_short_desc_html}
                        {/* <TouchableOpacity onPress={handleReadMorePress}>
                          <Text style={styles.readMore}>... read more</Text>
                        </TouchableOpacity> */}
                      </Text>
                    </View>
                    <View
                      style={{flexDirection: 'row', bottom: '5%', left: '6%'}}>
                      <Iconss name="access-time" size={25} color={THEME.data == 'light' ? LIGHT_TEXT_COLOR:DARK_TEXT_COLOR} />
                      <Text style={{marginTop: '0.9%', marginLeft: '2%' , color:THEME.data == 'light' ? LIGHT_TEXT_COLOR:DARK_TEXT_COLOR}}>
                        {selectedLanguage === 'letest_news'
                          ? items[currentIndex].art_created_date
                          : items[currentIndex].lt_notif_date}
                      </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Animated.View>
              {currentIndex < items.length - 1 && (
                <Animated.View
                  style={[
                    styles.cardContainer,
                    {
                      zIndex: 0,
                      position: readMoreClick ? 'relative' : 'absolute',
                      transform: [{translateY: nextSwipeAnimation}],
                    },
                    {backgroundColor:THEME.data == 'light' ? LIGHT_BG_COLOR:DARK_BG_COLOR}
                  ]}>
                  <TouchableWithoutFeedback>
                    <View style={[styles.card,{backgroundColor:THEME.data == 'light' ? LIGHT_BG_COLOR:DARK_BG_COLOR}]}>
                      <Image
                        source={{
                          uri: image_url,
                        }}
                        style={[styles.image, {marginTop: '1%'}]}
                      />
                      <View style={{top: '-12%'}}>
                        <Text style={[styles.title,{color:THEME.data == 'light' ? LIGHT_TEXT_COLOR:DARK_TEXT_COLOR}]}>
                          {stripHtmlTags(
                            items[currentIndex + 1]?.lt_notif_title_telugu,
                          )}
                        </Text>
                        <Text style={[styles.description,{color:THEME.data == 'light' ? LIGHT_TEXT_COLOR:DARK_TEXT_COLOR}]}>
                          {items[currentIndex + 1]?.lt_notif_short_desc_html}
                          {/* <TouchableOpacity
                            onPress={handleReadMorePress}
                            style={{width: 200, height: 200}}>
                            <Text style={styles.readMore}>... read more</Text>
                          </TouchableOpacity> */}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          bottom: '5%',
                          left: '6%',
                        }}>
                        <Iconss name="access-time" size={25}  color={THEME.data == 'light' ? LIGHT_TEXT_COLOR:DARK_TEXT_COLOR} />
                        <Text style={{marginTop: '0.9%', marginLeft: '2%', color:THEME.data == 'light' ? LIGHT_TEXT_COLOR:DARK_TEXT_COLOR}}>
                          {items[currentIndex + 1]?.lt_notif_date}
                        </Text>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </Animated.View>
              )}
              {currentIndex > 0 && (
                <Animated.View
                  style={[
                    styles.cardContainer,
                    {
                      zIndex: 0,
                      position: readMoreClick ? 'relative' : 'absolute',
                      transform: [{translateY: prevSwipeAnimation}],
                    },
                    {backgroundColor:THEME.data == 'light' ? LIGHT_BG_COLOR:DARK_BG_COLOR}
                  ]}>
                  <TouchableWithoutFeedback>
                    <View style={[styles.card, {backgroundColor:THEME.data == 'light' ? LIGHT_BG_COLOR:DARK_BG_COLOR}]}>
                      <Image
                        source={{
                          uri: image_url,
                        }}
                        style={[styles.image, {marginTop: '1%'}]}
                      />
                      <View style={{top: '-12%'}}>
                        <Text style={[styles.title,{color:THEME.data == 'light' ? LIGHT_TEXT_COLOR:DARK_TEXT_COLOR}]}>
                          {stripHtmlTags(
                            items[currentIndex - 1]?.lt_notif_title_telugu,
                          )}
                        </Text>
                        <Text style={[styles.description , {color:THEME.data == 'light' ? LIGHT_TEXT_COLOR:DARK_TEXT_COLOR}]}>
                          {items[currentIndex - 1]?.lt_notif_short_desc_html}
                          {/* <TouchableOpacity
                            onPress={handleReadMorePress}
                            style={{width: 200, height: 200}}>
                            <Text style={styles.readMore}>... read more</Text>
                          </TouchableOpacity> */}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          bottom: '5%',
                          left: '6%',
                        }}>
                        <Iconss name="access-time" size={25}  color={THEME.data == 'light' ? LIGHT_TEXT_COLOR:DARK_TEXT_COLOR}/>
                        <Text style={{marginLeft: '2%',color:THEME.data == 'light' ? LIGHT_TEXT_COLOR:DARK_TEXT_COLOR}}>
                          {items[currentIndex - 1]?.lt_notif_date}
                        </Text>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </Animated.View>
              )}
            </View>
          </View>
        )}
        {showHeaderFooter && (
          <View style={styles.overlay}>
            <Header
              onSelectedLanguage={handleLanguageChange}
              selectedLanguage={selectedLanguage}
            />
          </View>
        )}
        {showHeaderFooter && (
          <View style={styles.overlayFooter}>
            <Footer handleModalVisible={handleModalVisible} />
          </View>
        )}

        <View style={styles.More_model}>
          {isMoreModalVisible && <More_model onHandleCancelModel={handleCancelModel} />}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: 'relative',
    backgroundColor: '#F8F8F8',
    // backgroundColor: isDarkMode ? '#333' : '#FFF'
  },
  content: {
    // flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  cardWrapper: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cardContainer: {
    // position: readMoreClick ? 'relative' : 'absolute',
    // width: '100%',
    height: Dimensions.get('window').height * 1,
    justifyContent: 'center',
    alignItems: 'center',
    // margin:'15%'
  },
  card: {
    width: '100%',
    height: Dimensions.get('window').height * 0.8,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 10,
    // elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: Dimensions.get('window').width * 1.1,
    height: Dimensions.get('window').height * 0.5,
    borderRadius: 10,
    top: '-15%',
    left: '-3%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    margin: 35,
    width: 370,
    // top: '-11%',
    color: 'black',
    // backgroundColor: 'red',
  },
  description: {
    fontSize: 18,
    color: '#333',
    margin: '9%',
    marginTop: 0,
    //  marginLeft:'4%'
    // top: '-3%',
    // backgroundColor: 'red',
  },
  readMore: {
    fontSize: 14,
    color: '#007BFF',
  },
  loadingIndicator: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -350,
  },
  languageButtonsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  languageButtons: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  languageButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  transparent: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  overlayFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  More_model: {
    position: 'absolute',
    bottom: '25%',
    // left: 0,
    // right: 0,
    // top: 0,
    zIndex: 100,
  },
});

export default ListOfData;
