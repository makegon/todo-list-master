import { createStackNavigator } from 'react-navigation'
import homeScreen from './modules/homeScreen/homeScreen.android'
import Detail from '../Articles/Detail'
import { APP_HOME, ARTICLEDETAIL } from "../../routes";

export default createStackNavigator(
  {
    [APP_HOME]: homeScreen
  }
);
