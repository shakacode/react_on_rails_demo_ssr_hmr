import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import WebWrapper from './components/WebWrapper'
import {Platform } from 'react-native'

const App = () => {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()
  const isWeb = Platform.OS === 'web'

  if (!isLoadingComplete && !isWeb) {
    return null
  }

  const Wrapper = isWeb ? WebWrapper : SafeAreaProvider

  return (
    <Wrapper>
      <Navigation colorScheme={isWeb ? 'dark' : colorScheme} />
      <StatusBar />
    </Wrapper>
  )
}

export default App
