import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import { View } from 'react-native'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    console.log('Loding not completed')
    return null
  } else {
    return (
      // Hack: this styling is needed on root View containing Navigator
      <View
        style={{
          minHeight: 800,
          minWidth: 300
        }}
      >
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </View>
    )
  }
}
