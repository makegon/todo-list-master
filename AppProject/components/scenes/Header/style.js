import React from 'react'
import { StyleSheet } from "react-native"

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
})

export default styles


