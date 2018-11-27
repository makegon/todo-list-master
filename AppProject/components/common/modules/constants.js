import { Dimensions, Platform } from "react-native";

const wind = Dimensions.get('window')
export const h = wind.height
export const w = wind.width
export const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'НАЖМИТЕ R на Вашей клавиатуре для перезапуска,\n' +
    'ПОТРЯСИТЕ устройство для вывода меню разработчика',
})



