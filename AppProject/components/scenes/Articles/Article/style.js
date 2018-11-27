import {StyleSheet} from 'react-native';
import { w } from "../../../common/modules/constants";

export const styles = StyleSheet.create({
  h1: {
    fontFamily: 'Verdana',
    fontSize: 28,
    alignSelf: 'center',
    textAlign: 'center',
    width: w / 2.4
  },
  contain:{


  },
  icon: {
    width: w / 4.5,
    height: w * 0.23,
    borderRadius: 10

  },
  bink: {
    width: w / 2.5,
    backgroundColor: '#fff',
    paddingVertical: 10

  },
  cont: {
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOffset: {
      width: 8,
      height: 5
    },
    shadowOpacity: 0.9
  }
})
