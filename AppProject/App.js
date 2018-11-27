import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import appj from './app'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'НАЖМИТЕ R на Вашей клавиатуре для перезапуска,\n' +
    'ПОТРЯСИТЕ устройство для вывода меню разработчика',
});


export default class App extends Component{
  render() {
    console.log('-----','log');
    console.warn('Внимание! Привлекаю Ваше внимание...');
    return (
      <View>
        <View style={styles.headerView}>
          <Text style={styles.headerTitle}>{appj.displayName}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.instructions}>В данный момент файл App.js в разработке</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <Text style={styles.welcome}>Добро пожаловать в {'\n'} приложение {appj.displayName}!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerView:{
    backgroundColor: '#30d0fe',
    height:86,
    justifyContent: 'flex-end',
    paddingLeft: 12,
    paddingBottom:10,
    elevation: 2,
    position: 'relative',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width:0, height: 2},
    shadowOpacity: 0.2
  },
  headerTitle:{
    color: '#fff',
    fontSize:26,
    fontFamily:'AvenirNext-DemiBold'

  },
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
    color: '#30d0fe',
    backgroundColor: '#f6f6f6',
    padding: 20,

  },
  instructions: {
    textAlign: 'center',
    color: '#424242',
    marginBottom: 15,
  },
});
