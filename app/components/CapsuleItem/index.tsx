import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import capsuleIcon from '../../../img/capsule.png';
import { CapsuleItemProps } from './models/capsule-item-types';

const CapsuleItem: React.FC<CapsuleItemProps> = ({ title, id, onSelect }) => (
  <TouchableOpacity
    style={styles.capsule}
    onPress={(): Function => onSelect(id)}>
    <Image style={styles.imageBlock} source={capsuleIcon} />
    <Text>{title}</Text>
  </TouchableOpacity>
);
export default CapsuleItem;
