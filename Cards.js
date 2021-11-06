import React from 'react';
import { Card } from 'react-native-elements'
import { StyleSheet, Text, View, Image } from 'react-native';
import { AppRegistry } from 'react-native';

const CardC = ( { comida } ) => {
    return(
        <Card>
            <View key={ comida.id } style={ styles.comida }>
                <Image
                style={ styles.img }
                source={ comida.imagen }
                />
                <View>
                <Text style={ styles.nombre }>{ comida.nombre }</Text>
                <Text style={ styles.descripcion }>{ comida.descripcion }</Text>
                </View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    comida: {
      flexDirection: 'row',
    },
    img: {
      width: 100,
      height: 100,
    },
    nombre:{
      fontSize: 25,
      marginHorizontal: 15,
      fontWeight: 'bold'
    },
    descripcion: {
      fontSize: 20,
      marginHorizontal: 15,
      width: 230,
      textAlign: 'justify',
    },
  });

export default CardC

AppRegistry.registerComponent('CardC', () => CardC)