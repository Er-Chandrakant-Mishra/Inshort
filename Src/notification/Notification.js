import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Notification = () => {
  const [NotificationData, setNotificationData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(3); // Initially show 3 items
  const [loading, setLoading] = useState(true); // Add loading state

  const navigation = useNavigation();

  const fetchNotificationData = async () => {
    // fetch('http://172.17.15.218/hello/')
    //   .then(response => {
    //     if (!response.ok) {
    //       console.log('Network response was not ok' + response.statusText);
    //     }
    //     return response.json(); // Convert response to JSON
    //   })
    //   .then(jsonData => {
    //     console.log(jsonData);
    //     setNotificationData(jsonData.data);
    //   });

    try {
      const response = await fetch('http://172.17.15.218/hello/');
      if (!response.ok) {
        console.log('Network response was not ok' + response.statusText);
      }
      const jsonData = await response.json();
      setNotificationData(jsonData.data);
    } catch (error) {
      console.log('Error fetching data:',error)
    } finally {
      setLoading(false); // set loading to false once the data is fached 
    }
  };

  useEffect(() => {
    fetchNotificationData();
  }, []);

  const stripHtmlTags = str => {
    return str.replace(/<[^>]*>?/gm, '');
  };

  const loadMoreItems = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 3);
  };

  const image_url = 'https://pratibha.eenadu.net/images/thumbicon1.png';
  const renderItem = ({item}) => (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.card}>
        <Image source={{uri: image_url}} style={styles.images} />
        <View>
          <Text
            style={{
              textAlign: 'center',
              width: 200,
              marginLeft: '6%',
              marginTop: '2%',
              fontWeight: 'bold',
            }}>
            {stripHtmlTags(item.lt_notif_title_telugu)}
          </Text>
          <Text style={{textAlign: 'center', width: 200, paddingBottom: 20}}>
            {item.lt_notif_title_english}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{top: '-7%', left: '2%'}}>
        <Icon
          name="arrowleft"
          size={30}
          style={{marginLeft: '3%'}}
          color="#F6F5F5"
        />
      </TouchableOpacity>

      <View>
        {/* <View style={{position: 'absolute', top: '-40%', left: '25%'}}>
          <View style={styles.installButtonContainer}>
            <Image
              source={require('../Assets/moneyview.png')}
              style={styles.moneyview_image}
            />
            <View style={{marginBottom: '3%'}}>
              <Text style={{fontSize: 22, color: 'white', fontWeight: '400'}}>
                Moneyview
              </Text>
            </View>
            <TouchableOpacity
              style={styles.installButton}
              onPress={() => console.log('clicked')}>
              <Text style={{color: 'white', textAlign: 'center'}}>Install</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.recommendedTextContainer}>
            <Text style={styles.recommendedText}>Recommended News</Text>
          </View>
        </View> */}

        <View style={{height: '84%', top:'-4%'}}>
          {loading ? ( // show ActivityIndicator while loading
            <ActivityIndicator
              size="large"
              color={'#ffffff'}
              style={styles.loader}
            />
          ) : (
            <FlatList
              data={NotificationData} // Show only the items up to itemsToShow
              keyExtractor={item => item.lt_notif_id.toString()}
              renderItem={renderItem}
              contentContainerStyle={styles.flatListContent}
            />
          )}
        </View>
      </View>
      <TouchableOpacity style={styles.swipeUpButton} onPress={loadMoreItems}>
        <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>
          Swipe up to skip
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#686D76',
    justifyContent: 'flex-end',
  },
  flatListContent: {
    paddingBottom: 100,
  },
  cardContainer: {
    justifyContent: 'center',
  },
  card: {
    width: '80%',
    height: 115,
    alignSelf: 'center',
    margin: '2%',
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#9BB0C1',
    elevation: 20,
    shadowColor: 'black',
  },
  images: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginLeft: '1.5%',
    borderRadius: 5,
  },
  swipeUpButton: {
    justifyContent: 'center',
    backgroundColor: '#9BB0C1',
    width: '30%',
    height: 40,
    position: 'absolute',
    left: '35%',
    bottom: 30,
    borderRadius: 10,
  },
  installButtonContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  installButton: {
    backgroundColor: 'blue',
    width: '50%',
    height: 40,
    justifyContent: 'center',
    borderRadius: 100,
  },
  recommendedTextContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  recommendedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  moneyview_image: {
    width: 100,
    height: 100,
    marginBottom: '2%',
  },
  loader : {
    flex:1,
    justifyContent:'center'
  }
});
