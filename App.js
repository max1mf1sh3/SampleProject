import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from 'react';



let PlaceholderImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg';
const smiling = 'https://media.tenor.com/RpZWhUMEyv8AAAAe/free-smileys-faces-de-emoji.png';
const beary = 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg';



export default function App() {
  const [selectedImage, setSelectedImage] = useState(PlaceholderImageUrl);

  function smile() {
    setSelectedImage(smiling);
    alert("succesfful press");
  }

  function bear() {
    setSelectedImage(beary);
    alert("successfully pressed");
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={selectedImage}></ImageViewer>
      </View>
      <View style={styles.footerContainer}>
          <Button theme="primary" label="smile" onPress={smile} />
          <Button label="bear" onPress={bear}/>
      </View>
    <StatusBar style="auto" />
    </View>
  );
}
//<Text style={{color: "#fff"}}>This text has been lost to time.</Text>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0fff0c',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 320,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

/* TRY THIS OUT?
function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b !== undefined ? b : a,
    paddingBottom: c !== undefined ? c : a,
    paddingLeft: d !== undefined ? d : (b !== undefined ? b : a)
  }
}
*/