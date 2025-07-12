import 'react-native-gesture-handler';
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store'
import AppNavigator from './src/navigation/AppNavigator'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppNavigator />
      </GestureHandlerRootView>
    </Provider>
  )
}

export default App