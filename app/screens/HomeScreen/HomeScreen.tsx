import React, { useState } from 'react';
import {
  Text,
  Button,
  View,
  useWindowDimensions,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

export const HomeScreen: React.FC<{}> = ({ navigation, route }) => {
  const window = useWindowDimensions();
  const widthButtonBox = window.width / 2 - 10;
  const heightButtonBox = window.height / 3 - 10;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Capsules")}
        style={{
          ...styles.buttonBoxContainer,
          width: widthButtonBox,
          height: heightButtonBox
        }}>
        <View style={styles.textBlock}>
          <Text style={styles.text}>Capsules</Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          ...styles.buttonBoxContainer,
          width: widthButtonBox,
          height: heightButtonBox
        }}>
        <Text>1</Text>
      </View>
      <View
        style={{
          ...styles.buttonBoxContainer,
          width: widthButtonBox,
          height: heightButtonBox
        }}>
        <Text>1</Text>
      </View>

      {/* <Button
        title="Go to Capsules"
        onPress={() => navigation.navigate('Capsules')}
      /> */}
    </View>
  );
};
