
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function InputButton(props) {
  return (
    <TouchableOpacity style={styles.inputButton} onPress={()=>props.onPress(props.value)}>
        <Text>{props.value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    inputButton:{
        flex:1,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        backgroundColor: '#4671D5',
        borderWidth: 1,
        borderColor: '#06266F',
        borderRadius: 15,
        height: '90%'
    },
});
