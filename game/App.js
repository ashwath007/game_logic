
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity

} from 'react-native';

import {
  Text,
  Container,
  Content,
  Header,
  Body,
  Card,
  H1, H3,
  Button
} from 'native-base'




const App = () => {
  return (
    <>
      <View>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
    grid: 
    {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 20
    },
    box: {
      width: '33%',
      marginBottom: 6
    },
    card: {
      height: 120,
      justifyContent: 'center',
      alignItems: 'center'
    },
    message: {
      textAlign: 'center',
      textTransform: 'uppercase',
      color: "#FFF",
      backgroundColor: "#4652B3",
      paddingVertical :30
    }


});

export default App;
