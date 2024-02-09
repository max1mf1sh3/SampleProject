import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource }) {
  return (
    <Image source={{uri: placeholderImageSource}} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
    borderRadius: 18,
  },
});