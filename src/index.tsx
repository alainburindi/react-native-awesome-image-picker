import { Image, Text, View } from 'react-native';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function ImagePicker() {
  return (
    <View>
      <Text>Image Picker</Text>
      <Image source={require('./assets/images/close.jpg')} />
    </View>
  );
}
