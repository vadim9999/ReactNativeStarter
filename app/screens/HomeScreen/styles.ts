import { StyleSheet, Platform, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5ffe8',
    flexDirection: 'row',
    flexWrap: 'wrap'
    // alignItems: 'stretch'
  },
  buttonBoxContainer: {
    // flex: 1,
    // width: 50,
    // height: 50,
    // maxWidth: '50%',
    // minWidth: '50%',
    // minHeight: '30%',
    // maxHeight: '30%',
    // height: 50,
    margin: 5,
    // padding: 5,
    borderRadius: 10,
    backgroundColor: '#d0f5b5',
    borderWidth: 1,
    borderColor: 'white', 
    justifyContent: 'center',
    alignItems: 'center'
    // flexWrap: 'wrap',
  },
  textBlock:{
    // backgroundColor: 'black',
    
  },
  text: {
    color: 'green'
  }
});
