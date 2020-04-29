import React from 'react';
import { Text, Button, FlatList, View } from 'react-native';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';

import {
  MapDispatchToProps,
  MapStateToProps
} from './models/capsule-list-types';
import { getCapsules } from '../../store/actions';
import { GetCapsules } from '../../store/actions/models/spx-capsules-acions-types';
import { ApplicationState } from '../../store/reducers';

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): MapDispatchToProps => ({
  getCapsules: (): GetCapsules => dispatch(getCapsules())
});

const mapStateToProps = (state: ApplicationState): MapStateToProps => ({
  capsules: state.capsules
});

export const ConnectedCapsuleList: React.FC<
  MapDispatchToProps & MapStateToProps
> = (props) => {
  console.log('CapsuleList');

  return (
    <>
      <Text>CapsuleList</Text>
      <Button title="Get capsules" onPress={(): void => props.getCapsules()} />
      <FlatList
        data={props.capsules.map((capsule, index) => ({
          key: index.toString(),
          ...capsule
        }))}
        // data={[{ key: 'My', my: "ff" }]}
        renderItem={({ item }) => (
          <View>
            <Text>{item.capsule_serial}</Text>
          </View>
        )}
      />
    </>
  );
};

const CapsuleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedCapsuleList);
export default CapsuleList;
