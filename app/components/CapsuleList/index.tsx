import React from 'react';
import { Text, Button } from 'react-native';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';

import { MapDispatchToProps } from './models/capsule-list-types';
import { getCapsules } from '../../store/actions';
import { GetCapsules } from '../../store/actions/models/spx-capsules-acions-types';

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): MapDispatchToProps => ({
  getCapsules: (): GetCapsules => dispatch(getCapsules())
});

export const ConnectedCapsuleList: React.FC<MapDispatchToProps> = (props) => {
  console.log('CapsuleList');

  return (
    <>
      <Text>CapsuleList</Text>
      <Button title="Get capsules" onPress={(): void => props.getCapsules()} />
    </>
  );
};

const CapsuleList = connect(null, mapDispatchToProps)(ConnectedCapsuleList);
export default CapsuleList;
