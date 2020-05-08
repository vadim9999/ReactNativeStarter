import React, { useEffect } from 'react';
import { Text, Button, FlatList, View } from 'react-native';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {
  MapDispatchToProps,
  MapStateToProps
} from './models/capsule-list-types';
import { getCapsules as get } from '../../store/actions';
import { GetCapsules } from '../../store/actions/models/spx-capsules-acions-types';
import { ApplicationState } from '../../store/reducers';
import styles from './styles';
import CapsuleItem from '../CapsuleItem';
import { Capsule } from '../../models/spx-capsules-api-types';

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): MapDispatchToProps => ({
  getCapsules: (): GetCapsules => dispatch(get())
});

const mapStateToProps = (state: ApplicationState): MapStateToProps => ({
  capsules: state.capsules
});

export const ConnectedCapsuleList: React.FC<
  MapDispatchToProps & MapStateToProps
> = ({ getCapsules, capsules }) => {
  const navigation = useNavigation();

  useEffect(() => {
    getCapsules();
  }, [getCapsules]);

  const onSelect = (id: string): void => {
    const capsule = capsules.find(
      (capsuleItem: Capsule) => capsuleItem.id === id
    );

    if (capsule) {
      navigation.navigate('Capsule', { capsule });
    }
  };
  // console.log("capsules", capsules);

  return (
    <View style={styles.container}>
      <FlatList
        data={capsules}
        numColumns={2}
        // keyExtractor={(index): string => index.toString()}
        // data={[{ key: 'My', my: "ff" }]}
        renderItem={({ item }): JSX.Element => (
          // console.log("item", item.key);
          <CapsuleItem
            id={item.id}
            onSelect={onSelect}
            title={item.capsule_serial}
          />
        )}
      />
    </View>
  );
};

const CapsuleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedCapsuleList);
export default CapsuleList;
