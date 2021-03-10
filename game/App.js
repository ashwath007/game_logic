
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity

} from 'react-native';
import Icons from "./components/Icons"
import Snackbar from "react-native-snackbar"
import {
  Text,
  Container,
  Content,
  Header,
  Body,
  Title,
  Card,
  H1, H3,
  Button
} from 'native-base'





const itemArray = new Array(9).fill('empty')

const App = () => {
  const [isCross,setIsCross] = useState(false);
const [winMessage,setWinMessage] = useState('');





const changeItem = (itemNum) => {
        if(winMessage){
          return Snackbar.show({
            text: winMessage,
            backgroundColor: '#000',
            textColor:"#FFF"
          })
        }
        if(itemArray[itemNum] === 'empty'){
          itemArray[itemNum] = isCross ? 'cross' : 'circle'
          setIsCross(!isCross)  
        }
        else{
          return Snackbar.show({
            text:'This is already filled'
          })
        }
        checkWinner()

}

const reloadGame = () => {
    setWinMessage('')
    setIsCross(false)
    itemArray.fill('empty',0,9)
} 

const checkWinner = () => {
  if(
    itemArray[0] === itemArray[1] && itemArray[1] === itemArray[2] && itemArray[0] !=='empty'
  ){
    setWinMessage(`${itemArray[0]} Won`)
  }
  else if(
    itemArray[3] === itemArray[4] && itemArray[4] === itemArray[5] && itemArray[3] !=='empty'
  ){
    setWinMessage(`${itemArray[3]} Won`)
  }
  else if(
    itemArray[6] === itemArray[7] && itemArray[7] === itemArray[8] && itemArray[6] !=='empty'
  ){
    setWinMessage(`${itemArray[6]} Won`)
  }
  else if(
    itemArray[0] === itemArray[3] && itemArray[3] === itemArray[6] && itemArray[0] !=='empty'
  ){
    setWinMessage(`${itemArray[0]} Won`)
  }
  else if(
    itemArray[1] === itemArray[4] && itemArray[4] === itemArray[7] && itemArray[1] !=='empty'
  ){
    setWinMessage(`${itemArray[1]} Won`)
  }
  else if(
    itemArray[2] === itemArray[5] && itemArray[5] === itemArray[8] && itemArray[2] !=='empty'
  ){
    setWinMessage(`${itemArray[2]} Won`)
  }
  else if(
    itemArray[0] === itemArray[4] && itemArray[4] === itemArray[8] && itemArray[0] !=='empty'
  ){
    setWinMessage(`${itemArray[0]} Won`)
  }
  else if(
    itemArray[2] === itemArray[4] && itemArray[4] === itemArray[6] && itemArray[2] !=='empty'
  ){
    setWinMessage(`${itemArray[2]} Won`)
  }

}
  return (
   
      <Container style={{backgroundColor: "#333945", padding: 5}}>
        
        <Header>
          <Body>
          <Title>
            Game On
          </Title>
          </Body>
        </Header>
        <Content>
          <View style={styles.grid}>
          {itemArray.map((item,i)=>{
            return(
                <TouchableOpacity style={styles.box} key={i} onPress={()=>{changeItem(i)}}>
                    <Card style={styles.card}>
                      <Icons name={item}/>
                    </Card>
                </TouchableOpacity>
            )
          })

          }

          </View>
          {winMessage ? (
            <View>
                <H1 style={styles.message}>{winMessage}</H1>
                <Button>
                  <Text onPress={reloadGame}
                    primary
                    block
                    rounded
                  >
                    Reload
                  </Text>
                </Button>
            </View>
          ):(
            <H3 style={styles.message}>
              {
               isCross ? 'Cross ':'Circle ' 
              }
              turn
            </H3>
          )}
         

        </Content>
      </Container>
    
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
