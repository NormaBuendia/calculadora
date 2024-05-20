import React from 'react'
import { SafeAreaView, StatusBar} from 'react-native'
import CalculadoraScreen from './src/screen/CalculadoraScreen';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={ styles.fondo}>
      {/* para que la barra superior quede del mismo color que todo el celular */}
      <StatusBar
      // Android
        backgroundColor='black'
         // IOS
         barStyle='light-content'
      />
      <CalculadoraScreen/>
    </SafeAreaView>
  )
}

export default App
