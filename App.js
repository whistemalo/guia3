import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, FlatList } from 'react-native';
import CardC from './Cards';

const comidas = [
  {
    id: '1',
    nombre: 'Pupusas de Queso',
    imagen: require('./src/img/pupusas.jpg'),
    descripcion: 'Realizadas con masa de maiz o arroz y queso con loroco',
  },
  {
    id: '2',
    nombre: 'Yuca',
    imagen: require('./src/img/yuca.jpg'),
    descripcion: 'Yuca con curtido y las famosas pepescas',
  },
  {
    id: '3',
    nombre: 'Empanadas de frijol',
    imagen: require('./src/img/empanadas.jpg'),
    descripcion: 'Realizadas con platano molido y rellenadas de frijoles molidos',
  },
  {
    id: '4',
    nombre: 'Enchiladas',
    imagen: require('./src/img/enchiladas.jpg'),
    descripcion: 'Hechas con una tortilla tostada, queso rallado, curtido, huevo duro y frijoles',
  },
  {
    id: '5',
    nombre: 'Tamales',
    imagen: require('./src/img/tamales.jpg'),
    descripcion: 'Hechos con masa de maíz y rellenados con pollo, frijoles, chipilin',
  },
]

export default function App() {

  const renderItem = ({ item }) => (
    <CardC comida={ item }  />
  )

  return (
    <SafeAreaView style={ styles.container }>
      <FlatList 
      
        data= { comidas }
        renderItem = { renderItem }
        keyExtractor = { item => item.id }

      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
  },
});
