import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View, Vibration } from 'react-native';
import InputButton from './InputButton'
import Window from './Window'

const buttons = [
    ['CLEAR', 'DEL','%','/'],
    [7,8,9,'*'],
    [4,5,6,'-'],
    [1,2,3,'+'],
    ['',0,'.','=']
]
export default function Buttons() {

    const [value, setValue] = useState('')
    const [lastNumber, setLastNumber] = useState('');

    function calculator() {
    
        let lastArr = value[value.length-1];
        
        if(lastArr === '/' || lastArr === '*' || lastArr === '-' || lastArr === '+' || lastArr === '.' || lastArr === '%') {
          setValue(value)
          return
        }
        else {
          let result = eval(value).toString();
          setValue(result)
          return
        }
      }

    const getValue = (valueButton) =>{
        if(valueButton  === '+' || valueButton === '-' || valueButton === '*' || valueButton === '/' || valueButton === '%') {
            Vibration.vibrate(35);
            if( value.substring(value.length-1)  === '+' || value.substring(value.length-1) === '-' || value.substring(value.length-1) === '*' || value.substring(value.length-1) === '/' || value.substring(value.length-1) === '%') {
                setValue(value.substring(0, (value.length - 1)) + valueButton)
            }else{
                setValue(value + valueButton)
            }
            return
            
          }
        else if (valueButton === 1 || valueButton === 2 || valueButton === 3 || valueButton === 4 || valueButton === 5 ||
            valueButton === 6 || valueButton === 7 || valueButton === 8 || valueButton === 9 || valueButton === 0 || valueButton === '.' ) {
            Vibration.vibrate(35);
          }
        switch(valueButton) {
            case 'DEL':
              Vibration.vibrate(35);
              setValue(value.substring(0, (value.length - 1)))
              return
            case 'CLEAR':
              Vibration.vibrate(35);
              setLastNumber('')
              setValue('')
              return
            case '=':
              Vibration.vibrate(35);
              setLastNumber(value + '=')
              calculator()
              return
          }
        setValue(value + valueButton)
    }

    const renderButtons = () =>{
        let layouts = buttons.map((buttonRows, index) => {
            let rowItem = buttonRows.map((buttonItem,buttonIndex) => {
                return <InputButton key={'btn-' + buttonIndex} value={buttonItem} onPress = {getValue} />
            });
            return <View style={styles.row} key={'row-'+ index}>{rowItem}</View>
        });
        return layouts
    }
  return (
    <View style={styles.container}>
        <Window value={value} lastValue={lastNumber}/>
        <View style={styles.input}>
            {renderButtons()}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  row:{
      flex: 1,
      flexDirection: 'row',
  },
  input:{
      flex:4,
      backgroundColor: 'white'
  },
});
