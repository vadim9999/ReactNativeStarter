import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Props } from './models/capsule-screen-types';

const CapsuleScreen: React.FC<Props> = ({ navigation, route }) => {
  useEffect(() => {
    const { capsule } = route.params;
    navigation.setOptions({
      title: `Capsule ${capsule.capsule_serial}`
    });
  }, [navigation, route.params]);

  const { capsule_serial, capsule_id, status } = route.params.capsule;

  return (
    <View>
      <Text>{`Capsule serial ${capsule_serial}`}</Text>
      <Text>{`Capsule id ${capsule_id}`}</Text>
      <Text>{`Status ${status}`}</Text>
    </View>
  );
};

export default CapsuleScreen;
