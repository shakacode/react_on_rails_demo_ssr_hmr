import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App(props) {
  const { foo } = props

  return (
    <View style={styles.container}>
      <Text>Welcome To Expo App</Text>
      <Text>{foo}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
