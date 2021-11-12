
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Window(props) {
  return (
    <View style={styles.window}>
        <Text style={styles.windowText}>{props.lastValue}</Text>
        <Text style={styles.windowTextResult}>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    window:{
        flex:2,
        backgroundColor: '#2A4480',
        justifyContent: 'center'
    },
    windowText:{
        color: 'white',
        fontSize: 30,
        marginLeft: 7,
    },
    windowTextResult:{
        color: 'white',
        fontSize: 40,
        marginRight: 7,
        marginTop: 70,
        textAlign: 'right',
    }
});
