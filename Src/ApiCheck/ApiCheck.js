
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, Linking } from 'react-native';
import WebView from 'react-native-webview';
import VideoPlayer from 'react-native-video-player'


const App = () => {
  const [language, setLanguage] = useState('hi'); // Default language: Hindi
  const [data, setData] = useState([]);
  // console.log("data=",data)
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);



  const videoData = [
    {
      "id": "1",
      "title": "Big Buck Bunny",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
      "duration": "8:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "Vlc Media Player",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      "subscriber": "25254545 Subscribers",
      "isLive": true
    },
    {
      "id": "2",
      "title": "The first Blender Open Movie from 2006",
      "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
      "duration": "12:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "Blender Inc.",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      "subscriber": "25254545 Subscribers",
      "isLive": true
    },
    {
      "id": "3",
      "title": "For Bigger Blazes",
      "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
      "duration": "8:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "T-Series Regional",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      "subscriber": "25254545 Subscribers",
      "isLive": true
    },
    {
      "id": "4",
      "title": "For Bigger Escape",
      "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
      "duration": "8:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "T-Series Regional",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      "subscriber": "25254545 Subscribers",
      "isLive": false
    },
    {
      "id": "5",
      "title": "Big Buck Bunny",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
      "duration": "8:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "Vlc Media Player",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      "subscriber": "25254545 Subscribers",
      "isLive": true
    },
    {
      "id": "6",
      "title": "For Bigger Blazes",
      "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
      "duration": "8:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "T-Series Regional",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      "subscriber": "25254545 Subscribers",
      "isLive": false
    },
    {
      "id": "7",
      "title": "For Bigger Escape",
      "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
      "duration": "8:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "T-Series Regional",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      "subscriber": "25254545 Subscribers",
      "isLive": true
    },
    {
      "id": "8",
      "title": "The first Blender Open Movie from 2006",
      "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
      "duration": "12:18",
      "uploadTime": "May 9, 2011",
      "views": "24,969,123",
      "author": "Blender Inc.",
      "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      "subscriber": "25254545 Subscribers",
      "isLive": false
    }
  ]

  const videoUrl = videoData[0].videoUrl
  const thumbnail = videoData[0].thumbnailUrl
  const videoUrl1 = videoData[1].videoUrl
  const thumbnail1 = videoData[1].thumbnailUrl

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



    const handlePlayButtonClick = () => {
      if (item.play_url && item.play_url.url) {
        Linking.openURL(item.play_url.url);
      }
    };
    return (
      <>
        <Text>{item.title}</Text>
        <TouchableOpacity onPress={handlePlayButtonClick}>
          <Text>Play Video</Text>
        </TouchableOpacity>
        {/* <WebView
        automaticallyAdjustContentInsets={false}
        onLoad={() => console.log("Loaded")}
        startInLoadingState={true}
        javaScriptEnabled={true}
        source={{
          html: carousel_tag,
          headers: { 'key': 'value' }
        }}
        style={{ height: 300, color: 'red', flex: 1 }} // Set the desired height
      /> */}




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

      <VideoPlayer

        video={{ uri: videoUrl }}
        // videoWidth={400}
        // videoHeight={200}
        thumbnail={{ uri: thumbnail }}
        endThumbnail={{ uri: thumbnail }}
        showDuration={true}
        autoplay
        controlsTimeout={5000}
        // disableControlsAutoHide={true}
        // muted={true}
        defaultMuted={true}
        disableSeek={true}
        pauseOnPress={true}

      />
      <VideoPlayer

        video={{ uri: videoUrl1 }}
        // videoWidth={400}
        // videoHeight={200}
        thumbnail={{ uri: thumbnail1 }}
        endThumbnail={{ uri: thumbnail1 }}
        showDuration={true}
        autoplay
        controlsTimeout={5000}
        // disableControlsAutoHide={true}
        // muted={true}
        defaultMuted={true}
        disableSeek={true}
        pauseOnPress={true}

      />

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()} // Use index as the key
        renderItem={RenderItemdata}
      />


    </View>
  );
};

export default App;

